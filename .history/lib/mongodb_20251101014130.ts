import mongoose, { ConnectOptions } from "mongoose";

// Define the shape of the cache stored on the global object.
// We attach this so hot-reloading / serverless re-deploys during development
// don't create multiple Mongoose connections.
interface MongooseCache {
  // The resolved mongoose instance when connected
  conn: typeof mongoose | null;
  // The pending connection promise when a connection attempt is in-flight
  promise: Promise<typeof mongoose> | null;
}

// Augment the global namespace so TypeScript knows about our cache on `global`.
declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  var mongooseCache: MongooseCache | undefined;
}

// Create the global cache object if it doesn't exist yet.
if (!global.mongooseCache) {
  global.mongooseCache = { conn: null, promise: null };
}

// Exported helper that returns a connected mongoose instance.
// It caches the connection to avoid creating multiple connections in
// development (Next.js hot reload) or serverless environments.
export async function connectToDatabase(): Promise<typeof mongoose> {
  // If we've already established a connection, reuse it.
  if (global.mongooseCache?.conn) {
    return global.mongooseCache.conn;
  }

  // If there's an in-flight connection attempt, wait for it and return the result.
  if (global.mongooseCache?.promise) {
    global.mongooseCache.conn = await global.mongooseCache.promise;
    return global.mongooseCache.conn as typeof mongoose;
  }

  // Ensure the MongoDB URI is provided via environment variables.
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  // Connection options with sensible defaults. Adjust based on your MongoDB server/version.
  const options: ConnectOptions = {
    // useNewUrlParser and useUnifiedTopology are the defaults in modern mongoose; left here
    // for clarity and to illustrate options you might toggle in special environments.
    // If you need to pass additional options (auth, replicaSet, etc.) add them here.
  } as ConnectOptions;

  // Start the connection and store the promise on the global cache so parallel
  // requests reuse the same pending promise instead of opening duplicate connections.
  global.mongooseCache.promise = mongoose
    .connect(uri, options)
    .then((m) => {
      return mongoose;
    })
    .catch((err) => {
      // Reset the promise so future attempts can retry on failure.
      global.mongooseCache!.promise = null;
      throw err;
    });

  // Await the connection and cache the resolved mongoose instance.
  global.mongooseCache.conn = await global.mongooseCache.promise;
  return global.mongooseCache.conn as typeof mongoose;
}

export default connectToDatabase;

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
  // Local typed reference to the global cache (we initialise it above).
  const cache = global.mongooseCache as MongooseCache;

  // If we've already established a connection, reuse it.
  if (cache.conn) {
    return cache.conn;
  }

  // If there's an in-flight connection attempt, wait for it and return the result.
  if (cache.promise) {
    cache.conn = await cache.promise;
    return cache.conn as typeof mongoose;
  }

  // Ensure the MongoDB URI is provided via environment variables.
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  // Connection options with sensible defaults. Add or override options here
  // depending on your MongoDB deployment (auth, replicaSet, ssl, etc.).
  const options: ConnectOptions = {} as ConnectOptions;

  // Start the connection and store the promise on the cache so parallel
  // requests reuse the same pending promise instead of opening duplicate connections.
  cache.promise = mongoose
    .connect(MONGODB-URI, options)
    .then(() => mongoose)
    .catch((err) => {
      // Reset the promise so future attempts can retry on failure.
      cache.promise = null;
      throw err;
    });

  // Await the connection and cache the resolved mongoose instance.
  cache.conn = await cache.promise;
  return cache.conn as typeof mongoose;
}

export default connectToDatabase;

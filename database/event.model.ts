import mongoose, { Schema, Document, Model } from "mongoose";

// Event interface for strong typing
export interface IEvent extends Document {
  title: string;
  slug: string;
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  mode: string;
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema = new Schema<IEvent>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true, trim: true },
    overview: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    venue: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    time: { type: String, required: true, trim: true },
    mode: { type: String, required: true, trim: true },
    audience: { type: String, required: true, trim: true },
    agenda: { type: [String], required: true },
    organizer: { type: String, required: true, trim: true },
    tags: { type: [String], required: true },
  },
  {
    timestamps: true,
    strict: true,
  }
);

// Pre-save hook for slug generation, date normalization, and validation
EventSchema.pre<IEvent>("save", function (next) {
  // Slug generation: only if title changed
  if (this.isModified("title")) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  // Date normalization: ensure ISO format
  if (this.isModified("date")) {
    const parsedDate = new Date(this.date);
    if (isNaN(parsedDate.getTime())) {
      return next(new Error("Invalid date format. Must be parseable as a date."));
    }
    this.date = parsedDate.toISOString().split("T")[0]; // YYYY-MM-DD
  }

  // Time normalization: HH:mm format
  if (this.isModified("time")) {
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!timeRegex.test(this.time)) {
      return next(new Error("Invalid time format. Use HH:mm (24h)."));
    }
  }

  // Validate required fields are non-empty
  const requiredFields: (keyof IEvent)[] = [
    "title", "description", "overview", "image", "venue", "location", "date", "time", "mode", "audience", "agenda", "organizer", "tags"
  ];
  for (const field of requiredFields) {
    if (
      this[field] === undefined ||
      (Array.isArray(this[field]) ? this[field].length === 0 : String(this[field]).trim() === "")
    ) {
      return next(new Error(`Field '${field}' is required and must be non-empty.`));
    }
  }

  next();
});

// Unique index for slug
EventSchema.index({ slug: 1 }, { unique: true });

export const Event: Model<IEvent> =
  mongoose.models.Event || mongoose.model<IEvent>("Event", EventSchema);

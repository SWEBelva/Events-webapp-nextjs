import mongoose, { Schema, Document, Model, Types } from "mongoose";
import { Event } from "./event.model";

// Booking interface for strong typing
export interface IBooking extends Document {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    eventId: { type: Schema.Types.ObjectId, ref: "Event", required: true, index: true },
    email: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (v: string) =>
          /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(v),
        message: "Invalid email format."
      }
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

// Pre-save hook for event reference and email validation
BookingSchema.pre<IBooking>("save", async function (next) {
  // Validate referenced event exists
  const eventExists = await Event.exists({ _id: this.eventId });
  if (!eventExists) {
    return next(new Error("Referenced eventId does not exist."));
  }
  // Email format is validated by schema, no need to repeat here
  next();
});

// Index for eventId for faster queries
BookingSchema.index({ eventId: 1 });

export const Booking: Model<IBooking> =
  mongoose.models.Booking || mongoose.model<IBooking>("Booking", BookingSchema);

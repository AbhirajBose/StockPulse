import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["buy", "sell"], // Only allow "buy" or "sell"
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false } // No separate ObjectId for orders
);

export const Order = mongoose.model("Order", orderSchema);
export default orderSchema; // Export the schema separately for reuse

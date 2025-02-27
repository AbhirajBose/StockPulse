import mongoose from "mongoose";
import orderSchema from "./Order.models.js"; // Import Order schema

const stockSchema = new mongoose.Schema(
  {
    symbol: {
      type: String, // Example: "AAPL"
      required: true,
      trim: true,
      uppercase: true,
    },
    orders: [orderSchema], // Embed orders
  },
  { _id: false } // No separate ObjectId for stocks
);

export const Stock = mongoose.model("Stock", stockSchema);
export default stockSchema; // Export schema separately for reuse

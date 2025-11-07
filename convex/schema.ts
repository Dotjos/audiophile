import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  orders: defineTable({
    // Order identification
    orderId: v.string(),
    orderStatus: v.string(), // "pending", "processing", "completed", "cancelled"

    // Customer details
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.string(),

    // Shipping details
    shippingAddress: v.string(),
    shippingCity: v.string(),
    shippingCountry: v.string(),

    // Payment details
    paymentMethod: v.string(), // "emoney" or "cash"
    eMoneyNumber: v.optional(v.string()),

    // Order items
    items: v.array(
      v.object({
        id: v.number(),
        name: v.string(),
        slug: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.string(),
      })
    ),

    // Order totals
    subtotal: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),

    // Timestamps
    createdAt: v.number(),
  })
    .index("by_email", ["customerEmail"])
    .index("by_order_id", ["orderId"])
    .index("by_created_at", ["createdAt"]),
});

import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Generate a unique order ID
function generateOrderId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `ORD-${timestamp}-${random}`;
}

// Create a new order
export const createOrder = mutation({
  args: {
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.string(),
    shippingAddress: v.string(),
    shippingCity: v.string(),
    shippingCountry: v.string(),
    paymentMethod: v.string(),
    eMoneyNumber: v.optional(v.string()),
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
    subtotal: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),
  },
  handler: async (ctx, args) => {
    const orderId = generateOrderId();

    const order = await ctx.db.insert("orders", {
      orderId,
      orderStatus: "pending",
      customerName: args.customerName,
      customerEmail: args.customerEmail,
      customerPhone: args.customerPhone,
      shippingAddress: args.shippingAddress,
      shippingCity: args.shippingCity,
      shippingCountry: args.shippingCountry,
      paymentMethod: args.paymentMethod,
      eMoneyNumber: args.eMoneyNumber,
      items: args.items,
      subtotal: args.subtotal,
      shipping: args.shipping,
      vat: args.vat,
      grandTotal: args.grandTotal,
      createdAt: Date.now(),
    });

    return { orderId, _id: order };
  },
});

export const getOrderByOrderId = query({
  args: { orderId: v.string() },
  handler: async (ctx, args) => {
    const order = await ctx.db
      .query("orders")
      .filter((q) => q.eq(q.field("orderId"), args.orderId))
      .first();

    if (!order) {
      throw new Error("Order not found");
    }

    return order;
  },
});

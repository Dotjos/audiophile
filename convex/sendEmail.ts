"use node";
import { action } from "./_generated/server";
import nodemailer from "nodemailer";

interface User {
  name: string;
  email: string;
}

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

interface ShippingDetails {
  address: string;
  city: string;
  country: string;
}

interface Totals {
  subtotal: number;
  shipping: number;
  vat: number;
  grandTotal: number;
}

export const sendCartEmail = action(
  async (
    ctx,
    args: {
      user: User;
      orderId: string; // ✅ Added
      cart: CartItem[];
      shippingDetails: ShippingDetails; // ✅ Added
      totals: Totals; // ✅ Added
    }
  ) => {
    const { user, orderId, cart, shippingDetails, totals } = args;

    const SMTP_HOST = process.env.SMTP_HOST!;
    const SMTP_PORT = Number(process.env.SMTP_PORT!);
    const SMTP_USER = process.env.SMTP_USER!;
    const SMTP_PASS = process.env.SMTP_PASS!;

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const orderDate = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // 🧾 Build formatted HTML email
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; background-color:#f9f9f9; padding:30px;">
        <div style="max-width:600px; margin:auto; background:#fff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
          
          <div style="background-color:#D87D4A; padding:20px 30px;">
            <h1 style="color:#fff; margin:0; font-size:22px;">🎧 Audiophile Order Confirmation</h1>
          </div>
          
          <div style="padding:30px;">
            <p style="font-size:16px;">Hi <b>${user.name}</b>,</p>
            <p>Thank you for shopping with <b>Audiophile</b>! Your order has been successfully placed.</p>
            <p style="font-size:14px; color:#555;">Order ID: <b>${orderId}</b></p>
            <p style="font-size:14px; color:#555;">Order Date: ${orderDate}</p>

            <h3 style="margin-top:24px;">🛍️ Order Summary</h3>
            <table style="width:100%; border-collapse:collapse; margin-top:10px;">
              <thead>
                <tr>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding-bottom:8px;">Item</th>
                  <th style="text-align:center; border-bottom:1px solid #eee;">Qty</th>
                  <th style="text-align:right; border-bottom:1px solid #eee;">Price</th>
                </tr>
              </thead>
              <tbody>
                ${cart
                  .map(
                    (item) => `
                    <tr>
                      <td style="padding:8px 0;">${item.name}</td>
                      <td style="text-align:center;">${item.quantity}</td>
                      <td style="text-align:right;">$${(
                        item.price * item.quantity
                      ).toLocaleString()}</td>
                    </tr>
                  `
                  )
                  .join("")}
              </tbody>
            </table>

            <hr style="margin:20px 0; border:none; border-top:1px solid #eee;" />

            <h3 style="margin-top:24px;">📦 Shipping Details</h3>
            <p style="font-size:14px; color:#555;">
              ${shippingDetails.address}<br/>
              ${shippingDetails.city}, ${shippingDetails.country}
            </p>

            <table style="width:100%; font-size:14px;">
              <tr>
                <td>Subtotal:</td>
                <td style="text-align:right;">$${totals.subtotal.toLocaleString()}</td>
              </tr>
              <tr>
                <td>Shipping:</td>
                <td style="text-align:right;">$${totals.shipping.toLocaleString()}</td>
              </tr>
              <tr>
                <td>VAT:</td>
                <td style="text-align:right;">$${totals.vat.toLocaleString()}</td>
              </tr>
              <tr>
                <td style="font-weight:bold; padding-top:10px;">Total:</td>
                <td style="font-weight:bold; text-align:right; padding-top:10px; color:#D87D4A;">$${totals.grandTotal.toLocaleString()}</td>
              </tr>
            </table>

            <p style="margin-top:25px; font-size:14px; color:#555;">
              You’ll receive another email once your items have been shipped.  
              If you have any questions, please contact us at <a href="mailto:support@audiophile.com">support@audiophile.com</a>.
            </p>

            <p style="margin-top:25px; font-size:14px; color:#999;">
              — The Audiophile Team 🎶
            </p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Audiophile Store" <${SMTP_USER}>`,
      to: user.email,
      subject: `Your Audiophile Order Confirmation – ${orderId}`,
      html: htmlBody,
    });

    return { success: true };
  }
);

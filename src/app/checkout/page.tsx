"use client";
import { useState } from "react";
import BackBtn from "../components/BackBtn";
import { FormInput } from "../components/InputComponent";
import { RadioOption } from "../components/RadioOption";
import { useStore } from "../store/useStore";
import Image from "next/image";
import {
  calculateGrandTotal,
  calculateVAT,
  getShortProductName,
} from "../../../utils";
import { useAction } from "convex/react";
import { api } from "../../../convex/_generated/api";

type PaymentMethod = "emoney" | "cash";

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  paymentMethod: PaymentMethod;
  eMoneyNumber: string;
  eMoneyPin: string;
}

const CheckoutPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    paymentMethod: "emoney",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});

  const { getGrandTotal, getCartItems, toggleSuccessfulCheckOut } = useStore();
  const cartTotal = getGrandTotal();
  const cartItems = getCartItems();
  const sendCartEmail = useAction(api.sendEmail.sendCartEmail);

  const shipping = 50;
  const VAT = calculateVAT(cartTotal);
  const grandTotal = calculateGrandTotal(cartTotal, shipping, VAT);

  const setPaymentMethod = (method: PaymentMethod) => {
    setFormData((prev) => ({ ...prev, paymentMethod: method }));
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFormErrors((prev) => ({ ...prev, [field]: "" })); // clear error when typing
  };

  const validateForm = () => {
    const errors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Invalid email address";

    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.address.trim()) errors.address = "Address is required";
    if (!formData.city.trim()) errors.city = "City is required";
    if (!formData.country.trim()) errors.country = "Country is required";

    if (formData.paymentMethod === "emoney") {
      if (!formData.eMoneyNumber.trim())
        errors.eMoneyNumber = "e-Money number is required";
      if (!formData.eMoneyPin.trim())
        errors.eMoneyPin = "e-Money PIN is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const simplifiedCart = cartItems.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    }));

    await sendCartEmail({
      user: { name: formData.name, email: formData.email },
      cart: simplifiedCart,
    });
    toggleSuccessfulCheckOut();
  };

  return (
    <div>
      <div className="bg-black lg:h-[97px] h-[89px]" />
      <div className="px-3 pt-2 lg:px-[165px] lg:pt-[79px]">
        <BackBtn />

        <form
          onSubmit={handleSubmit}
          className="mt-3 lg:mt-[37px] grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-[30px]"
        >
          {/* LEFT SECTION */}
          <div className="p-3 md:py-[30px] md:px-7 lg:px-6 lg:pb-[48px] lg:pt-[54px] rounded-lg bg-white lg:col-span-2">
            <h1 className="font-bold text-[28px] md:text-[32px] tracking-[1px]">
              CHECKOUT
            </h1>

            {/* BILLING DETAILS */}
            <section className="mt-[32px] md:mt-[41px]">
              <h2 className="text-primary font-bold text-[13px] mb-2">
                BILLING DETAILS
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                <FormInput
                  label="Name"
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(val) => updateField("name", val)}
                  error={formErrors.name}
                />
                <FormInput
                  label="Email Address"
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(val) => updateField("email", val)}
                  error={formErrors.email}
                />
                <FormInput
                  label="Phone Number"
                  id="phone"
                  type="tel"
                  placeholder="+1 202-555-0136"
                  value={formData.phone}
                  onChange={(val) => updateField("phone", val)}
                  error={formErrors.phone}
                />
              </div>
            </section>

            {/* SHIPPING INFO */}
            <section className="mt-[32px] md:mt-[53px]">
              <h2 className="text-primary font-bold text-[13px] mb-2">
                SHIPPING INFO
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                <FormInput
                  label="Your Address"
                  id="address"
                  placeholder="123 Main Street"
                  value={formData.address}
                  onChange={(val) => updateField("address", val)}
                  error={formErrors.address}
                />
                <FormInput
                  label="City"
                  id="city"
                  placeholder="New York"
                  value={formData.city}
                  onChange={(val) => updateField("city", val)}
                  error={formErrors.city}
                />
                <FormInput
                  label="Country"
                  id="country"
                  placeholder="United States"
                  value={formData.country}
                  onChange={(val) => updateField("country", val)}
                  error={formErrors.country}
                />
              </div>
            </section>

            {/* PAYMENT DETAILS */}
            <section className="mt-[32px] md:mt-[61px]">
              <h2 className="text-primary font-bold text-[13px] mb-2">
                PAYMENT DETAILS
              </h2>
              <div className="grid md:grid-cols-2">
                <h3 className="text-black text-[12px] font-bold mb-[17px]">
                  Payment Method
                </h3>
                <div className="flex flex-col gap-2 mb-4">
                  <RadioOption
                    id="emoney"
                    label="e-Money"
                    checked={formData.paymentMethod === "emoney"}
                    onChange={() => setPaymentMethod("emoney")}
                  />
                  <RadioOption
                    id="cash"
                    label="Cash on Delivery"
                    checked={formData.paymentMethod === "cash"}
                    onChange={() => setPaymentMethod("cash")}
                  />
                </div>
              </div>

              {formData.paymentMethod === "emoney" && (
                <div className="grid md:grid-cols-2 gap-3">
                  <FormInput
                    label="e-Money Number"
                    id="eMoneyNumber"
                    placeholder="238521993"
                    value={formData.eMoneyNumber}
                    onChange={(val) => updateField("eMoneyNumber", val)}
                    error={formErrors.eMoneyNumber}
                  />
                  <FormInput
                    label="e-Money PIN"
                    id="eMoneyPin"
                    placeholder="6891"
                    value={formData.eMoneyPin}
                    onChange={(val) => updateField("eMoneyPin", val)}
                    error={formErrors.eMoneyPin}
                  />
                </div>
              )}

              {formData.paymentMethod === "cash" && (
                <div className="gap-4 flex items-center justify-center mt-[30px]">
                  <Image
                    width={48}
                    height={48}
                    src="/assets/checkout/icon-cash-on-delivery.svg"
                    alt="Cash on delivery icon"
                  />
                  <p className="text-Body text-black/50">
                    The 'Cash on Delivery' option enables you to pay in cash
                    when our delivery courier arrives. Just make sure your
                    address is correct so your order will not be cancelled.
                  </p>
                </div>
              )}
            </section>
          </div>

          {/* RIGHT SECTION: SUMMARY */}
          <div className="bg-white h-fit rounded-lg py-4 px-3 md:px-4">
            <h1 className="text-black text-[18px] font-bold tracking-[1.286px] uppercase">
              Summary
            </h1>

            <div className="py-4 flex flex-col gap-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-center">
                  <div className="relative rounded-lg overflow-hidden h-16 w-16">
                    <Image
                      fill
                      src={item.image.mobile}
                      alt={`${item.slug}-cart-image`}
                    />
                  </div>
                  <div className="flex justify-center pl-2 flex-col">
                    <span className="font-bold text-Body">
                      {getShortProductName(item.name)}
                    </span>
                    <span className="text-body opacity-50 font-bold">
                      ${(item.quantity * item.price).toLocaleString()}
                    </span>
                  </div>
                  <span className="ml-auto text-Body text-black/50 font-bold text-right">
                    x{item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <span className="text-black/50 font-normal text-Body">
                  TOTAL
                </span>
                <span className="text-black font-bold">
                  ${cartTotal.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-black/50 font-normal text-Body">
                  SHIPPING
                </span>
                <span className="text-black font-bold">
                  ${shipping.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-black/50 font-normal text-Body">
                  VAT(INCLUDED)
                </span>
                <span className="text-black font-bold">
                  ${VAT.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="flex justify-between mt-3">
              <span className="text-black/50 font-normal text-Body">
                GRAND TOTAL
              </span>
              <span className="text-primary font-bold">
                ${grandTotal.toLocaleString()}
              </span>
            </div>

            <button
              type="submit"
              className="bg-primary w-full py-[15px] mt-4 text-white font-bold text-[13px] tracking-[1px]"
            >
              CONTINUE & PAY
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;

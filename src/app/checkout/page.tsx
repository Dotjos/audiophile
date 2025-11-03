"use client";

import { useState } from "react";
import BackBtn from "../components/BackBtn";
import { FormInput } from "../components/InputComponent";
import { RadioOption } from "../components/RadioOption";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    paymentMethod: "emoney" as "emoney" | "cash", // Proper type annotation
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const setPaymentMethod = (method: "emoney" | "cash") => {
    setFormData((prev) => ({ ...prev, paymentMethod: method }));
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <div className="">
      <div className="bg-black h-[89px]"></div>
      {/* dfdfdf */}
      <div className="px-3 pt-2">
        <BackBtn />
        <form className="mt-3 rounded-lg p-3 md:py-[30px] md:px-7 bg-white">
          <h1 className="font-bold text-[28px] md:text-[32px] tracking-[1px] leading-none">
            CHECKOUT
          </h1>
          <div>
            <h1 className="text-primary font-bold text-[13px] md:pt-[41px] pt-[32px] pb-2 leading-[25px] tracking-[0.929px]">
              BILLING DETAILS
            </h1>
            <div className="grid md:grid-cols-2 gap-3 md:gap-x-2 md:gap-y-3">
              <FormInput
                label="Name"
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(val) => updateField("name", val)}
              />

              <FormInput
                label="Email Address"
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(val) => updateField("email", val)}
              />

              <FormInput
                label="Phone Number"
                id="phone"
                type="tel"
                placeholder="+1 202-555-0136"
                value={formData.phone}
                onChange={(val) => updateField("phone", val)}
              />
            </div>
          </div>

          <div>
            <h1 className="text-primary font-bold text-[13px] pt-[32px] md:pt-[53px] pb-2 leading-[25px] tracking-[0.929px]">
              SHOPPING INFO
            </h1>
            <div className="grid md:grid-cols-2 gap-3 md:gap-x-2 md:gap-y-3">
              <FormInput
                label="Your Address"
                id="address"
                placeholder="123 Main Street"
                value={formData.address}
                onChange={(val) => updateField("address", val)}
              />

              <FormInput
                label="City"
                id="city"
                placeholder="New York"
                value={formData.city}
                onChange={(val) => updateField("city", val)}
              />

              <FormInput
                label="Country"
                id="country"
                placeholder="United States"
                value={formData.country}
                onChange={(val) => updateField("country", val)}
              />
            </div>
          </div>

          <div>
            <h1 className="text-primary font-bold text-[13px] pt-[32px] md:pt-[61px] pb-2 leading-[25px] tracking-[0.929px]">
              PAYMENT DETAILS
            </h1>
            <div className="grid md:grid-cols-2">
              <h1 className="text-black text-[12px] font-bold tracking-normal leading-[-0.214px] mb-[17px]">
                Payment Method
              </h1>
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
            <div className="grid md:grid-cols-2 gap-3">
              <FormInput
                label="e-Money Number"
                id="e-Money Number"
                placeholder="238521993"
                value={formData.name}
                onChange={(val) => updateField("name", val)}
              />

              <FormInput
                label="e-Money PIN"
                id="e-Money PIN"
                placeholder="6891"
                value={formData.name}
                onChange={(val) => updateField("name", val)}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;

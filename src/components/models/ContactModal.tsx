"use client";
import React, { useState } from "react";
import Modal from "./ModalLayout";
import MainHeading from "../pages/typography/MainHeading";
import Paragraph from "../pages/typography/Paragraph";
import InputField from "../inputField/InputField";
import SelectField from "../inputField/SelectField";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [selected, setSelected] = useState("");
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center justify-start">
        <MainHeading className="mb-5">Contact Us</MainHeading>
        <Paragraph className="text-center text-[#434242]">
          We'd love to hear from you! Our team is available to answer any
          questions you may have regarding features, pricing or help installing
          your POS system. Complete the form below and one of our experts will
          call you soon to offer individualized help and guide you on how to get
          started with Owners Inventory.
        </Paragraph>

        <div
          className="bg-white  w-full max-w-[768px] h-auto mt-10 rounded-[30px] p-8"
          style={{ boxShadow: "2px 2px 22px 0px rgba(0,0,0,0.15)" }}
        >
          <div className="grid md:grid-cols-2 gap-x-4 gap-y-6">
            <div className="">
              <InputField
                required
                label="Work Email"
                type="email"
                placeHolder="Enter your  work email"
              />
            </div>
            <div className="">
              <InputField
                required
                label="Company"
                type="text"
                placeHolder="Enter your company name"
              />
            </div>
            <div className="">
              <InputField
                required
                label="Your First Name"
                type="text"
                placeHolder="Enter your full name"
              />
            </div>
            <div className="">
              <InputField
                required
                label="Your Last Name"
                type="text"
                placeHolder="Enter your last name"
              />
            </div>
            <div className="">
              <InputField
                required
                label="Phone number"
                type="number"
                placeHolder="Enter your Phone number"
              />
            </div>
            <div className="">
              <SelectField
                label="Select your plan"
                placeholder="Choose a plan"
                required
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                options={[
                  { label: "Free Plan", value: "free" },
                  { label: "Pro Plan", value: "pro" },
                  { label: "Enterprise", value: "enterprise" },
                ]}
                //   error={selected === "" ? "Please select a plan" : ""}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;

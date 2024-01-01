import React, { useState } from "react";
import contactPageImg from "../assets/contact-page.svg";
import contactIllustration from "../assets/contact-illustration.svg";
import { motion } from "framer-motion";
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";
import emailjs from "emailjs-com";

interface LabelInputProps {
  labelText: string;
  placeholderText: string;
  name: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  textarea?: boolean;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  icon?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  secondary,
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${secondary ? "bg-secondary" : "bg-accent"} ${
        secondary ? "hover:bg-hoverSecondary" : "hover:bg-hoverPrimary"
      } transition-all ease-linear duration-300 py-2.5 px-8 rounded-full text-white text-base sm:text-lg mt-6 text-bold relative w-full sm:w-fit`}>
      {icon ? (
        <div className="flex items-center gap-2.5 justify-center">
          <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">
            {children}
          </p>
          <img src={icon} alt="Icons" />
        </div>
      ) : (
        <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">{children}</p>
      )}
    </button>
  );
};

const LabelInput: React.FC<LabelInputProps> = ({
  labelText,
  placeholderText,
  textarea,
}) => {
  return (
    <div className="flex flex-col gap-2.5 flex-1 w-full">
      <label
        htmlFor={placeholderText}
        className="text-textPrimary text-base sm:text-lg font-bold"
        aria-required="true">
        {labelText}
      </label>

      {textarea ? (
        <textarea
          id={placeholderText}
          rows={9}
          placeholder={placeholderText}
          className="bg-accent rounded-2xl py-4 px-6 text-textPrimary text-base sm:text-lg
       placeholder-textSecondary outline-none resize-none border-[1px] border-transparent focus:border-hoverSecondary"
          aria-required="true"></textarea>
      ) : (
        <input
          type="text"
          id={placeholderText}
          placeholder={placeholderText}
          autoComplete="off"
          className="bg-accent rounded-2xl py-4 px-6 text-textPrimary text-base sm:text-lg
        placeholder-textSecondary outline-none resize-none border-[1px] border-transparent focus:border-hoverSecondary"
        />
      )}
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    try {
      const result = await emailjs.sendForm(
        "service_8t5xuyq",
        "template_zugiozg",
        form,
        "wd0xWvCGV1lbqb6U-"
      );

      console.log(result.text);
      setSuccessMessage("Message sent successfully!");
      setErrorMessage(null);
      setFormData({ name: "", email: "", message: "" });
      console.log(formData);
    } catch (error: any) {
      if (error instanceof Error) {
        console.error(error.message);
        setSuccessMessage(null);
        setErrorMessage("Error sending message. Please try again.");
      } else {
        console.error("An unknown error occurred.");
      }
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${contactPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
      items-center xl:items-start gap-12 w-full pt-20 pb-20 sm:pb-16 px-12">
        <div className="flex-1 flex flex-col gap-4">
          <motion.h2
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
            font-bold text-textPrimary">
            Got a project in<span className="text-secondary"> mind?</span>
          </motion.h2>

          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={contactIllustration}
            alt=""
            className="max-h-[348px]"
          />
        </div>

        <motion.div
          variants={fadeIn("up")}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex-1 flex flex-col gap-6 w-full max-w-[696px]">
          <form onSubmit={handleSendMessage}>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <LabelInput
                labelText="Your name"
                placeholderText="Name"
                name="name"
                onChange={handleChange}
              />
              <LabelInput
                labelText="Your email"
                placeholderText="Email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
              <LabelInput
                labelText="Your message"
                placeholderText="Message"
                textarea
                name="message"
                onChange={handleChange}
              />
            </div>
            <Button secondary type="submit">
              Send Message
            </Button>
          </form>
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default Contact;

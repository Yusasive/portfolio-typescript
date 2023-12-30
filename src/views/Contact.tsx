import React, { useState } from "react";
import contactPageImg from "../assets/contact-page.svg";
import contactIllustration from "../assets/contact-illustration.svg";
import { Button, LabelInput, Reveal } from "../components";
import { motion } from "framer-motion";
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";
import emailjs from "emailjs-com";

interface LabelInputProps {
  labelText: string;
  placeholderText: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabelInput: React.FC<LabelInputProps> = ({ labelText, placeholderText, name, onChange }) => {
  return (
    // Your LabelInput component implementation
    // Make sure to use the 'name' prop where needed
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = e.target as HTMLFormElement;
  
    try {
      const result = await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form,
        "YOUR_USER_ID"
      );
  
      console.log(result.text);
      setSuccessMessage("Message sent successfully!");
      setErrorMessage(null);
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
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary">
              Got a project in<span className="text-secondary"> mind?</span>
            </h2>
          </Reveal>

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
            <div className="flex flex-col sm:flex-row items-center gap-6">
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

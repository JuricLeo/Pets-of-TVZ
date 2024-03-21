"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;
    const newErrors: Partial<FormData> = {};

    if (formData.name.length < 8) {
      newErrors.name = "Username must be at least 8 characters long";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message";
      isValid = false;
    }

    if (isValid) {
      console.log("Form data:", formData);
      toast.success("Message sent successfully!");
    } else {
      setErrors(newErrors);
      toast.error(
        "There was an error while sending the message. Please try again."
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex flex-col flex-1 space-y-2">
          <label htmlFor="name" className="text-white/30">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="'Luka'"
            className={cn(
              "rounded-md bg-slate-800 p-6 z-50",
              errors.name && "border-rose-500 border-2"
            )}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="flex flex-col flex-1 space-y-2">
          <label htmlFor="email" className="text-white/30">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="'moj@tvz.hr'"
            className={cn(
              "rounded-md bg-slate-800 p-6 z-50",
              errors.email && "border-rose-500 border-2"
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col flex-1 space-y-2">
          <label htmlFor="subject" className="text-white/30">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="'Pets Table'"
            className={cn(
              "rounded-md bg-slate-800 p-6 z-50",
              errors.subject && "border-rose-500 border-2"
            )}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject}</p>
          )}
        </div>
        <div className="flex flex-col flex-1 space-y-2">
          <label htmlFor="message" className="text-white/30">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="'Are you displaying all pets...'"
            className={cn(
              "rounded-md bg-slate-800 p-6 h-40 resize-none z-50",
              errors.message && "border-rose-500 border-2"
            )}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>
        <Button
          type="submit"
          className="flex ml-auto bg-sky-700 hover:bg-sky-600"
        >
          Submit
        </Button>
        <BackgroundBeams />
      </form>
    </div>
  );
};

export default ContactPage;

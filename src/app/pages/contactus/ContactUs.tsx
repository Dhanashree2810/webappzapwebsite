'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useState } from "react";
import { z } from 'zod';
import globalschema from "../../../../globalschema";

type ValidationErrors = Record<string, string>;

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobileNo: '',
    message: '',
  });
  const [contactSuccess, setContactSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleValidation = () => {
    try {
      globalschema.parse({
        name: form.name,
        email: form.email,
        mobile: form.mobileNo,
        message: form.message,
      });
      setErrors({});
      return true;
    } catch (e) {
      if (e instanceof z.ZodError) {
        const validationErrors = e.errors.reduce((acc: ValidationErrors, err) => {
          if (typeof err.path[0] === "string") {
            acc[err.path[0]] = err.message;
          }
          return acc;
        }, {});
        setErrors(validationErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (handleValidation()) {
      try {
        await axios.post('https://api-accnt.wazl.in/ContactUs/Add', form);
        setContactSuccess(true);
        setForm({ name: '', email: '', mobileNo: '', message: '' });
        setTimeout(() => setContactSuccess(false), 3000);
      } catch (error) {
        console.error('Form submission error:', error);
      }
    }
  };

  return (
    <section className="bg-darkBlue p-1 lg:p-8">
      <div className="container mx-auto">
        <div className="py-10 lg:py-20 px-4 lg:px-20">
          <div className="w-full text-left mb-6 lg:mb-8 pt-8 lg:pt-0">
            <h2 className="text-white text-xl italic">
              <span className="border-b-2 border-red-500 pb-2">Con</span>
              tact Us
            </h2>
            <h2 className="text-white text-2xl lg:text-5xl font-extrabold my-6 lg:my-10 italic">
              Let&apos;s Talk About Your Ideas
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 pt-8 lg:pt-0">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="flex flex-col">
                    <Label htmlFor="validationName" className="text-white mb-2">
                      Name *
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      id="validationName"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Please Enter Your Name *"
                      className="w-full border-gray-300 rounded-none"
                    />
                    {errors.name && (
                      <div className="text-red-500 text-xs mt-2">{errors.name}</div>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <Label htmlFor="validationEmail" className="text-white mb-2">
                      Email *
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="validationEmail"
                      placeholder="Please Enter Your Email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border-gray-300 rounded-none"
                    />
                    {errors.email && (
                      <div className="text-red-500 text-xs mt-2">{errors.email}</div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex flex-col">
                    <Label htmlFor="validationMobileNo" className="text-white mb-2">
                      Mobile No.
                    </Label>
                    <Input
                      type="tel"
                      name="mobileNo"
                      id="validationMobileNo"
                      maxLength={10}
                      placeholder="Please Enter Your Mobile Number"
                      pattern="[789][0-9]{9}"
                      value={form.mobileNo}
                      onChange={handleChange}
                      className="block w-full border-gray-300 rounded-none"
                    />
                    {errors.mobile && (
                      <div className="text-red-500 text-xs mt-2">{errors.mobile}</div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex flex-col">
                    <Label htmlFor="validationMessage" className="text-white mb-2">
                      Message *
                    </Label>
                    <Textarea
                      name="message"
                      id="validationMessage"
                      maxLength={160}
                      placeholder="Write Your Message *"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border-gray-300 rounded-none"
                    ></Textarea>
                    {errors.message && (
                      <div className="text-red-500 text-xs mt-2">{errors.message}</div>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="btn primary-btn bg-primaryRed text-white px-6 py-3 rounded mt-3"
                >
                  Submit
                </Button>
              </form>
              {contactSuccess && (
                <div className="alert text-success mt-4">
                  Thank you! Your message has been sent.
                </div>
              )}
            </div>

            <div className="flex flex-col pl-0 lg:pl-32">
              <h3 className="text-white text-lg font-semibold italic">
                Registered Office Address
              </h3>
              <ul className="text-white text-xs font-semibold list-none mt-6 space-y-4">
                <li className="leading-7">
                  104/5, Atlanta Residency, Bhiwandi, <br />
                  Thane-421302, Maharashtra, India.
                </li>
                <li>
                  <a href="tel:+918668651514" className="hover:text-primaryRed">
                    +91 86686 51514
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contactus@webappzap.com"
                    className="hover:text-primaryRed"
                  >
                    contactus@webappzap.com
                  </a>
                </li>
              </ul>

              <h3 className="text-white text-lg font-semibold italic mt-8">
                Office Address
              </h3>
              <ul className="text-white text-xs font-semibold list-none mt-6 space-y-4">
                <li className="leading-7">
                  47, Shop No. 1 and 2, Siddhivinayak Apartment, Kap Ali, Opp. <br />
                  BNCMC Office, Next to Aniket Xerox, Kap ali, Bhiwandi, <br />
                  Thane-421302, Maharashtra, India.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

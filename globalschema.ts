import { z } from 'zod';

const globalschema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .regex(/^[\u0900-\u097F\u0000-\u007F0-9\s&'-]+$/, { message: "Name can only contain letters, numbers, spaces, apostrophes, and hyphens" })
    .optional(),
    mobileNo: z.string()
    .nonempty({ message: "Mobile is required!" })
    .regex(/^[789]\d{9}$/, { message: "Phone Number Must be 10 Digits" })
    .optional(),
  message: z.string().nonempty({ message: "Message is required!" }).optional(),
  emailId: z.string().nonempty({ message: "Email is required!" }).email({ message: "Valid Email Address is Required!" }).optional(),
});

export default globalschema;

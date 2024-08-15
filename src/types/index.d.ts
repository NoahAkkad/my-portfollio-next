// index.d.ts

// Custom global type declarations
declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}

declare module "*.jpeg" {
  const content: any;
  export default content;
}

declare module "*.gif" {
  const content: any;
  export default content;
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.sass" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.md" {
  const content: string;
  export default content;
}

// Global type example
interface Window {
  myCustomProperty: any;
}

// Extend existing Next.js types (optional)
import type { NextApiRequest } from "next";
import type { NextApiResponse } from "next";

declare module "next" {
  interface NextApiRequest {
    customProperty?: string;
  }

  interface NextApiResponse {
    customMethod?: () => void;
  }
}

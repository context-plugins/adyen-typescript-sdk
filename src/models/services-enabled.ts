import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ServicesEnabled = {
  CardAcquisition: "CardAcquisition",
  Payment: "Payment",
  Loyalty: "Loyalty",
} as const;
export type ServicesEnabled = (typeof ServicesEnabled)[keyof typeof ServicesEnabled] | (string & {});

export const servicesEnabledSchema: EnumSchema<ServicesEnabled> = s.enumOf<ServicesEnabled>(ServicesEnabled);

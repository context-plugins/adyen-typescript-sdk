import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type273Schema, type Type273 } from "./type273.js";

export type IdentificationData1 = {
  cardNumber?: string;
  expiryDate?: string;
  issuerCountry?: string;
  issuerState?: string;
  nationalIdExempt?: boolean;
  number?: string;
  type: Type273;
};

export const identificationData1Schema: Schema<IdentificationData1> = s.object<IdentificationData1>({
  cardNumber: s.optional(s.string()),
  expiryDate: s.optional(s.string()),
  issuerCountry: s.optional(s.string()),
  issuerState: s.optional(s.string()),
  nationalIdExempt: s.optional(s.boolean()),
  number: s.optional(s.string()),
  type: type273Schema,
});

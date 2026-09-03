import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type132Schema, type Type132 } from "./type132.js";

export type IdentificationData1 = {
  cardNumber?: string;
  expiryDate?: string;
  issuerCountry?: string;
  issuerState?: string;
  nationalIdExempt?: boolean;
  number?: string;
  type: Type132;
};

export const identificationData1Schema: Schema<IdentificationData1> = s.object<IdentificationData1>({
  cardNumber: s.optional(s.string()),
  expiryDate: s.optional(s.string()),
  issuerCountry: s.optional(s.string()),
  issuerState: s.optional(s.string()),
  nationalIdExempt: s.optional(s.boolean()),
  number: s.optional(s.string()),
  type: type132Schema,
});

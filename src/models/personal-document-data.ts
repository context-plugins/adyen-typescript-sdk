import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type15Schema, type Type15 } from "./type15.js";

export type PersonalDocumentData = {
  expirationDate?: string;
  issuerCountry?: string;
  issuerState?: string;
  number?: string;
  type: Type15;
};

export const personalDocumentDataSchema: Schema<PersonalDocumentData> = s.object<PersonalDocumentData>({
  expirationDate: s.optional(s.string()),
  issuerCountry: s.optional(s.string()),
  issuerState: s.optional(s.string()),
  number: s.optional(s.string()),
  type: type15Schema,
});

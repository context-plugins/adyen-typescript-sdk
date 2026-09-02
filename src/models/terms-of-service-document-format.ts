import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TermsOfServiceDocumentFormat = {
  Json: "JSON",
  Pdf: "PDF",
  Txt: "TXT",
} as const;
export type TermsOfServiceDocumentFormat =
  | (typeof TermsOfServiceDocumentFormat)[keyof typeof TermsOfServiceDocumentFormat]
  | (string & {});

export const termsOfServiceDocumentFormatSchema: EnumSchema<TermsOfServiceDocumentFormat> =
  s.enumOf<TermsOfServiceDocumentFormat>(TermsOfServiceDocumentFormat);

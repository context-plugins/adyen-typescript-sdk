import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GeneratePciDescriptionResponse = {
  /** The generated questionnaires in a base64 encoded format. */
  content?: string;
  /**
   * The two-letter [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code
   * for the questionnaire. For example, **en**.
   */
  language?: string;
  /**
   * The array of Adyen-generated unique identifiers for the questionnaires. If empty, the user is
   * not required to sign questionnaires.
   */
  pciTemplateReferences?: string[];
};

export const generatePciDescriptionResponseSchema: Schema<GeneratePciDescriptionResponse> =
  s.object<GeneratePciDescriptionResponse>({
    content: s.optional(s.string()),
    language: s.optional(s.string()),
    pciTemplateReferences: s.optional(s.array(s.string())),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GeneratePciDescriptionResponse = {
  content?: string;
  language?: string;
  pciTemplateReferences?: string[];
};

export const generatePciDescriptionResponseSchema: Schema<GeneratePciDescriptionResponse> =
  s.object<GeneratePciDescriptionResponse>({
    content: s.optional(s.string()),
    language: s.optional(s.string()),
    pciTemplateReferences: s.optional(s.array(s.string())),
  });

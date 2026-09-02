import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseSchema, type Response } from "./response.js";

export type ModificationResult = {
  additionalData?: Record<string, string>;
  pspReference: string;
  response: Response;
};

export const modificationResultSchema: Schema<ModificationResult> = s.object<ModificationResult>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  pspReference: s.string(),
  response: responseSchema,
});

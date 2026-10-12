import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseSchema, type Response } from "./response.js";

export type ModificationResult = {
  /**
   * This field contains additional data, which may be returned in a particular modification
   * response.
   */
  additionalData?: Record<string, string>;
  /**
   * Adyen's 16-character string reference associated with the transaction/request. This value is
   * globally unique; quote it when communicating with us about this request.
   */
  pspReference: string;
  /** Indicates if the modification request has been received for processing. */
  response: Response;
};

export const modificationResultSchema: Schema<ModificationResult> = s.object<ModificationResult>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  pspReference: s.string(),
  response: responseSchema,
});

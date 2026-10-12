import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssociationInitiateResponse = {
  /**
   * A string that you must pass to the authentication SDK to continue with the association process.
   */
  sdkInput?: string;
};

export const associationInitiateResponseSchema: Schema<AssociationInitiateResponse> =
  s.object<AssociationInitiateResponse>({
    sdkInput: s.optional(s.string()),
  });

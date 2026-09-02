import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssociationInitiateResponse = {
  sdkInput?: string;
};

export const associationInitiateResponseSchema: Schema<AssociationInitiateResponse> =
  s.object<AssociationInitiateResponse>({
    sdkInput: s.optional(s.string()),
  });

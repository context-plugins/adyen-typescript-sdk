import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DataReviewConfirmationResponse = {
  dataReviewedAt?: string;
};

export const dataReviewConfirmationResponseSchema: Schema<DataReviewConfirmationResponse> =
  s.object<DataReviewConfirmationResponse>({
    dataReviewedAt: s.optional(s.string()),
  });

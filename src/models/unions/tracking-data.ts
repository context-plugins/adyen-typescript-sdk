import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  confirmationTrackingDataSchema,
  type ConfirmationTrackingData,
} from "../confirmation-tracking-data.js";
import { estimationTrackingDataSchema, type EstimationTrackingData } from "../estimation-tracking-data.js";
import {
  internalReviewTrackingDataSchema,
  type InternalReviewTrackingData,
} from "../internal-review-tracking-data.js";

export type TrackingData =
  | (EstimationTrackingData & { type: "estimation" })
  | (ConfirmationTrackingData & { type: "confirmation" })
  | (InternalReviewTrackingData & { type: "internalReview" });

export const trackingDataSchema: Schema<TrackingData> = s.discriminatedUnion<TrackingData>("type", {
  estimation: estimationTrackingDataSchema,
  confirmation: confirmationTrackingDataSchema,
  internalReview: internalReviewTrackingDataSchema,
});

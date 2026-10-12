import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status71Schema, type Status71 } from "./status71.js";

export type CardOrderItemDeliveryStatus = {
  /** An error message. */
  errorMessage?: string;
  /** The status of the PIN delivery. */
  status?: Status71;
  /** The tracking number of the PIN delivery. */
  trackingNumber?: string;
};

export const cardOrderItemDeliveryStatusSchema: Schema<CardOrderItemDeliveryStatus> =
  s.object<CardOrderItemDeliveryStatus>({
    errorMessage: s.optional(s.string()),
    status: s.optional(s.lazy(() => status71Schema)),
    trackingNumber: s.optional(s.string()),
  });

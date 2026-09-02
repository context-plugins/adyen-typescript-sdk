import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status71Schema, type Status71 } from "./status71.js";

export type CardOrderItemDeliveryStatus = {
  errorMessage?: string;
  status?: Status71;
  trackingNumber?: string;
};

export const cardOrderItemDeliveryStatusSchema: Schema<CardOrderItemDeliveryStatus> =
  s.object<CardOrderItemDeliveryStatus>({
    errorMessage: s.optional(s.string()),
    status: s.optional(s.lazy(() => status71Schema)),
    trackingNumber: s.optional(s.string()),
  });

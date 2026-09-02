import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status71Schema, type Status71 } from "./status71.js";

export type CardOrderItemDeliveryStatus1 = {
  errorMessage?: string;
  status?: Status71;
  trackingNumber?: string;
};

export const cardOrderItemDeliveryStatus1Schema: Schema<CardOrderItemDeliveryStatus1> =
  s.object<CardOrderItemDeliveryStatus1>({
    errorMessage: s.optional(s.string()),
    status: s.optional(s.lazy(() => status71Schema)),
    trackingNumber: s.optional(s.string()),
  });

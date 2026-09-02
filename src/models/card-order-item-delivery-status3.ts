import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status71Schema, type Status71 } from "./status71.js";

export type CardOrderItemDeliveryStatus3 = {
  errorMessage?: string;
  status?: Status71;
  trackingNumber?: string;
};

export const cardOrderItemDeliveryStatus3Schema: Schema<CardOrderItemDeliveryStatus3> =
  s.object<CardOrderItemDeliveryStatus3>({
    errorMessage: s.optional(s.string()),
    status: s.optional(s.lazy(() => status71Schema)),
    trackingNumber: s.optional(s.string()),
  });

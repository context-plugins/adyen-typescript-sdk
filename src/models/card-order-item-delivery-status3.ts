import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status71Schema, type Status71 } from "./status71.js";

/**
 * The status of the card delivery.
 *
 * Possible values: **created**, **rejected**, **processing**, **produced**, **shipped**,
 * **delivered**, **notApplicable**, **unknown**.
 */
export type CardOrderItemDeliveryStatus3 = {
  /** An error message. */
  errorMessage?: string;
  /** The status of the PIN delivery. */
  status?: Status71;
  /** The tracking number of the PIN delivery. */
  trackingNumber?: string;
};

export const cardOrderItemDeliveryStatus3Schema: Schema<CardOrderItemDeliveryStatus3> =
  s.object<CardOrderItemDeliveryStatus3>({
    errorMessage: s.optional(s.string()),
    status: s.optional(s.lazy(() => status71Schema)),
    trackingNumber: s.optional(s.string()),
  });

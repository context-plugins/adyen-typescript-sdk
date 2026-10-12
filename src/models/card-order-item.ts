import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cardOrderItemDeliveryStatus1Schema,
  type CardOrderItemDeliveryStatus1,
} from "./card-order-item-delivery-status1.js";
import {
  cardOrderItemDeliveryStatus3Schema,
  type CardOrderItemDeliveryStatus3,
} from "./card-order-item-delivery-status3.js";

export type CardOrderItem = {
  /** The unique identifier of the balance platform. */
  balancePlatform?: string;
  /**
   * The status of the card delivery.
   *
   * Possible values: **created**, **rejected**, **processing**, **produced**, **shipped**,
   * **delivered**, **notApplicable**, **unknown**.
   */
  card?: CardOrderItemDeliveryStatus3;
  /** The unique identifier of the card order item. */
  cardOrderItemId?: string;
  /**
   * The date and time when the event was triggered, in ISO 8601 extended format. For example,
   * **2025-03-19T10:15:30+01:00**.
   */
  creationDate?: Date;
  /** The ID of the resource. */
  id?: string;
  /** The unique identifier of the payment instrument related to the card order item. */
  paymentInstrumentId?: string;
  /** Contains information about the status of the PIN delivery. */
  pin?: CardOrderItemDeliveryStatus1;
  /** The shipping method used to deliver the card or the PIN. */
  shippingMethod?: string;
};

export const cardOrderItemSchema: Schema<CardOrderItem> = s.object<CardOrderItem>({
  balancePlatform: s.optional(s.string()),
  card: s.optional(s.lazy(() => cardOrderItemDeliveryStatus3Schema)),
  cardOrderItemId: s.optional(s.string()),
  creationDate: s.optional(s.dateTime()),
  id: s.optional(s.string()),
  paymentInstrumentId: s.optional(s.string()),
  pin: s.optional(s.lazy(() => cardOrderItemDeliveryStatus1Schema)),
  shippingMethod: s.optional(s.string()),
});

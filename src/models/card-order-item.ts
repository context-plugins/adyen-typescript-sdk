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
  balancePlatform?: string;
  card?: CardOrderItemDeliveryStatus3;
  cardOrderItemId?: string;
  creationDate?: Date;
  id?: string;
  paymentInstrumentId?: string;
  pin?: CardOrderItemDeliveryStatus1;
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

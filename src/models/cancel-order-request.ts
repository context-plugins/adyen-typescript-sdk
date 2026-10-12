import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { encryptedOrderData4Schema, type EncryptedOrderData4 } from "./encrypted-order-data4.js";

export type CancelOrderRequest = {
  /** The merchant account identifier that orderData belongs to. */
  merchantAccount: string;
  /**
   * The order request object that contains a pspReference that represents the order and the
   * matching encrypted order data.
   */
  order: EncryptedOrderData4;
};

export const cancelOrderRequestSchema: Schema<CancelOrderRequest> = s.object<CancelOrderRequest>({
  merchantAccount: s.string(),
  order: encryptedOrderData4Schema,
});

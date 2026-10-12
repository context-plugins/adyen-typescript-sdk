import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The order request object that contains a pspReference that represents the order and the matching
 * encrypted order data.
 */
export type EncryptedOrderData4 = {
  /** The encrypted order data. */
  orderData: string;
  /** The `pspReference` that belongs to the order. */
  pspReference: string;
};

export const encryptedOrderData4Schema: Schema<EncryptedOrderData4> = s.object<EncryptedOrderData4>({
  orderData: s.string(),
  pspReference: s.string(),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The order information required for partial payments. */
export type EncryptedOrderData2 = {
  /** The encrypted order data. */
  orderData: string;
  /** The `pspReference` that belongs to the order. */
  pspReference: string;
};

export const encryptedOrderData2Schema: Schema<EncryptedOrderData2> = s.object<EncryptedOrderData2>({
  orderData: s.string(),
  pspReference: s.string(),
});

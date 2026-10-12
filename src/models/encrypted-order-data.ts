import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EncryptedOrderData = {
  /** The encrypted order data. */
  orderData: string;
  /** The `pspReference` that belongs to the order. */
  pspReference: string;
};

export const encryptedOrderDataSchema: Schema<EncryptedOrderData> = s.object<EncryptedOrderData>({
  orderData: s.string(),
  pspReference: s.string(),
});

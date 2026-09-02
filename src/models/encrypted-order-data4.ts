import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EncryptedOrderData4 = {
  orderData: string;
  pspReference: string;
};

export const encryptedOrderData4Schema: Schema<EncryptedOrderData4> = s.object<EncryptedOrderData4>({
  orderData: s.string(),
  pspReference: s.string(),
});

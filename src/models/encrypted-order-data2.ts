import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EncryptedOrderData2 = {
  orderData: string;
  pspReference: string;
};

export const encryptedOrderData2Schema: Schema<EncryptedOrderData2> = s.object<EncryptedOrderData2>({
  orderData: s.string(),
  pspReference: s.string(),
});

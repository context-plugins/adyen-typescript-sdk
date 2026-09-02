import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EncryptedOrderData = {
  orderData: string;
  pspReference: string;
};

export const encryptedOrderDataSchema: Schema<EncryptedOrderData> = s.object<EncryptedOrderData>({
  orderData: s.string(),
  pspReference: s.string(),
});

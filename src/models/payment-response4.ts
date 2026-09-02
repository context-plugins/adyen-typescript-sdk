import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyResultSchema, type LoyaltyResult } from "./loyalty-result.js";
import { paymentReceiptSchema, type PaymentReceipt } from "./payment-receipt.js";
import { paymentResult11Schema, type PaymentResult11 } from "./payment-result11.js";
import { poiData1Schema, type PoiData1 } from "./poi-data1.js";
import { response11Schema, type Response11 } from "./response11.js";
import { saleData6Schema, type SaleData6 } from "./sale-data6.js";

export type PaymentResponse4 = {
  response: Response11;
  saleData: SaleData6;
  poiData: PoiData1;
  paymentResult?: PaymentResult11;
  loyaltyResult?: LoyaltyResult[];
  paymentReceipt?: PaymentReceipt[];
};

export const paymentResponse4Schema: Schema<PaymentResponse4> = s.object<PaymentResponse4>({
  response: response11Schema,
  saleData: saleData6Schema,
  poiData: poiData1Schema,
  paymentResult: s.optional(s.lazy(() => paymentResult11Schema)),
  loyaltyResult: s.optional(s.array(s.lazy(() => loyaltyResultSchema))),
  paymentReceipt: s.optional(s.array(s.lazy(() => paymentReceiptSchema))),
  _keysMap: {
    response: "Response",
    saleData: "SaleData",
    poiData: "POIData",
    paymentResult: "PaymentResult",
    loyaltyResult: "LoyaltyResult",
    paymentReceipt: "PaymentReceipt",
  },
});

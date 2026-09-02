import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyResultSchema, type LoyaltyResult } from "./loyalty-result.js";
import { paymentResult1Schema, type PaymentResult1 } from "./payment-result1.js";
import { poiDataSchema, type PoiData } from "./poi-data.js";
import { response1Schema, type Response1 } from "./response1.js";
import { saleDataSchema, type SaleData } from "./sale-data.js";

export type PerformedTransaction = {
  response: Response1;
  saleData?: SaleData;
  poiData?: PoiData;
  paymentResult?: PaymentResult1;
  loyaltyResult?: LoyaltyResult[];
  reversedAmount?: number;
};

export const performedTransactionSchema: Schema<PerformedTransaction> = s.object<PerformedTransaction>({
  response: response1Schema,
  saleData: s.optional(s.lazy(() => saleDataSchema)),
  poiData: s.optional(s.lazy(() => poiDataSchema)),
  paymentResult: s.optional(s.lazy(() => paymentResult1Schema)),
  loyaltyResult: s.optional(s.array(s.lazy(() => loyaltyResultSchema))),
  reversedAmount: s.optional(s.number()),
  _keysMap: {
    response: "Response",
    saleData: "SaleData",
    poiData: "POIData",
    paymentResult: "PaymentResult",
    loyaltyResult: "LoyaltyResult",
    reversedAmount: "ReversedAmount",
  },
});

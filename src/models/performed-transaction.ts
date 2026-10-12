import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyResultSchema, type LoyaltyResult } from "./loyalty-result.js";
import { paymentResult1Schema, type PaymentResult1 } from "./payment-result1.js";
import { poiDataSchema, type PoiData } from "./poi-data.js";
import { response1Schema, type Response1 } from "./response1.js";
import { saleDataSchema, type SaleData } from "./sale-data.js";

export type PerformedTransaction = {
  /**
   * Result of a message request processing. If Result is Success, `ErrorCondition` is absent or not
   * used in the processing of the message. In the other cases, the `ErrorCondition` has to be
   * present and can refine the processing of the message response. `AdditionalResponse` gives more
   * information about the success or the failure of the message request processing, for logging
   * without real time involvements.
   */
  response: Response1;
  /**
   * Data associated with the Sale System, with a particular value during the processing of the
   * payment by the POI, including the cards acquisition.
   */
  saleData?: SaleData;
  /**
   * Data related to the POI System. In the Message Response, identification of the POI transaction.
   */
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
  reversedAmount: s.optional(s.float64()),
  _keysMap: {
    response: "Response",
    saleData: "SaleData",
    poiData: "POIData",
    paymentResult: "PaymentResult",
    loyaltyResult: "LoyaltyResult",
    reversedAmount: "ReversedAmount",
  },
});

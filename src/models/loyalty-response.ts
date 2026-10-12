import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyResultSchema, type LoyaltyResult } from "./loyalty-result.js";
import { paymentReceiptSchema, type PaymentReceipt } from "./payment-receipt.js";
import { poiData1Schema, type PoiData1 } from "./poi-data1.js";
import { response11Schema, type Response11 } from "./response11.js";
import { saleData1Schema, type SaleData1 } from "./sale-data1.js";

/**
 * It conveys Information related to the Loyalty transaction processed by the POI System. Content of
 * the Loyalty Response message.
 */
export type LoyaltyResponse = {
  /** Result of a message request processing. */
  response: Response11;
  /** Data related to the Sale System. */
  saleData: SaleData1;
  /** Data related to the POI System. */
  poiData: PoiData1;
  /**
   * Data related to the result of a processed loyalty transaction. If loyalty account identified.
   */
  loyaltyResult?: LoyaltyResult[];
  paymentReceipt?: PaymentReceipt[];
};

export const loyaltyResponseSchema: Schema<LoyaltyResponse> = s.object<LoyaltyResponse>({
  response: response11Schema,
  saleData: saleData1Schema,
  poiData: poiData1Schema,
  loyaltyResult: s.optional(s.array(s.lazy(() => loyaltyResultSchema))),
  paymentReceipt: s.optional(s.array(s.lazy(() => paymentReceiptSchema))),
  _keysMap: {
    response: "Response",
    saleData: "SaleData",
    poiData: "POIData",
    loyaltyResult: "LoyaltyResult",
    paymentReceipt: "PaymentReceipt",
  },
});

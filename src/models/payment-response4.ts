import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyResultSchema, type LoyaltyResult } from "./loyalty-result.js";
import { paymentReceiptSchema, type PaymentReceipt } from "./payment-receipt.js";
import { paymentResult11Schema, type PaymentResult11 } from "./payment-result11.js";
import { poiData1Schema, type PoiData1 } from "./poi-data1.js";
import { response11Schema, type Response11 } from "./response11.js";
import { saleData6Schema, type SaleData6 } from "./sale-data6.js";

/**
 * It conveys Information related to the Payment transaction processed by the POI System. Content of
 * the Payment Response message.
 */
export type PaymentResponse4 = {
  /** Result of a message request processing. */
  response: Response11;
  /** Data related to the Sale System. Copy. */
  saleData: SaleData6;
  /** Data related to the POI System. */
  poiData: PoiData1;
  /**
   * Data related to the result of a processed payment transaction. If one data element is present.
   */
  paymentResult?: PaymentResult11;
  /**
   * Data related to the result of a processed loyalty transaction. Loyalty cards used with the
   * payment transaction.
   */
  loyaltyResult?: LoyaltyResult[];
  /**
   * Customer or Merchant payment receipt. If the payment receipts are printed by the Sale system
   * and the POI or the Sale does not implement the Print exchange (Basic profile).
   */
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

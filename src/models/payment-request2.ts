import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyDataSchema, type LoyaltyData } from "./loyalty-data.js";
import { paymentData1Schema, type PaymentData1 } from "./payment-data1.js";
import { paymentTransaction1Schema, type PaymentTransaction1 } from "./payment-transaction1.js";
import { saleData1Schema, type SaleData1 } from "./sale-data1.js";

/**
 * Request sent to terminal to initiate payment. It conveys Information related to the Payment
 * transaction to process. Content of the `PaymentRequest` message.
 */
export type PaymentRequest2 = {
  /** Data related to the Sale System. */
  saleData: SaleData1;
  /** Data related to the payment and loyalty transaction. */
  paymentTransaction: PaymentTransaction1;
  /** Data related to the payment transaction. If one data element is present. */
  paymentData?: PaymentData1;
  /**
   * Data related to a Loyalty program or account. Loyalty cards used with the payment transaction
   * and read by the Sale System.
   */
  loyaltyData?: LoyaltyData[];
};

export const paymentRequest2Schema: Schema<PaymentRequest2> = s.object<PaymentRequest2>({
  saleData: saleData1Schema,
  paymentTransaction: paymentTransaction1Schema,
  paymentData: s.optional(s.lazy(() => paymentData1Schema)),
  loyaltyData: s.optional(s.array(s.lazy(() => loyaltyDataSchema))),
  _keysMap: {
    saleData: "SaleData",
    paymentTransaction: "PaymentTransaction",
    paymentData: "PaymentData",
    loyaltyData: "LoyaltyData",
  },
});

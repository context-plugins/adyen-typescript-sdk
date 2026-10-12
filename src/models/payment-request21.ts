import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyDataSchema, type LoyaltyData } from "./loyalty-data.js";
import { paymentData1Schema, type PaymentData1 } from "./payment-data1.js";
import { paymentTransaction1Schema, type PaymentTransaction1 } from "./payment-transaction1.js";
import { saleData1Schema, type SaleData1 } from "./sale-data1.js";

/** Content of the Payment Request message. */
export type PaymentRequest21 = {
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

export const paymentRequest21Schema: Schema<PaymentRequest21> = s.object<PaymentRequest21>({
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

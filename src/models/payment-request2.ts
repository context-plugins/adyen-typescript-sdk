import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyDataSchema, type LoyaltyData } from "./loyalty-data.js";
import { paymentData1Schema, type PaymentData1 } from "./payment-data1.js";
import { paymentTransaction1Schema, type PaymentTransaction1 } from "./payment-transaction1.js";
import { saleData1Schema, type SaleData1 } from "./sale-data1.js";

export type PaymentRequest2 = {
  saleData: SaleData1;
  paymentTransaction: PaymentTransaction1;
  paymentData?: PaymentData1;
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

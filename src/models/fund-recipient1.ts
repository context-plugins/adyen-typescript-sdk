import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address3Schema, type Address3 } from "./address3.js";
import { cardDetails1Schema, type CardDetails1 } from "./card-details1.js";
import { name2Schema, type Name2 } from "./name2.js";
import { subMerchant2Schema, type SubMerchant2 } from "./sub-merchant2.js";
import { walletPurposeSchema, type WalletPurpose } from "./wallet-purpose.js";

/** the person or entity receiving the money */
export type FundRecipient1 = {
  /** The IBAN of the bank account where the funds are being transferred to. */
  iban?: string;
  /** The address where to send the invoice. */
  billingAddress?: Address3;
  /** The payment method used by the shopper. */
  paymentMethod?: CardDetails1;
  /** The email address of the shopper. */
  shopperEmail?: string;
  /** The name of the shopper. */
  shopperName?: Name2;
  /**
   * Required for recurring payments. Your reference to uniquely identify this shopper, for example
   * user ID or account ID. The value is case-sensitive and must be at least three characters. >
   * Your reference must not include personally identifiable information (PII) such as name or email
   * address.
   */
  shopperReference?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /**
   * Required for back-to-back/purchase-driven-load transactions, where the funds are taken from the
   * shopper's stored card when the wallet balance is insufficient. The final merchant who will
   * receive the money, also known as a
   * [sub-merchant](https://docs.adyen.com/get-started-with-adyen/payment-glossary/#submerchant).
   */
  subMerchant?: SubMerchant2;
  /** The telephone number of the shopper. */
  telephoneNumber?: string;
  /**
   * The unique identifier for the wallet the funds are being transferred to. You can use the
   * shopper reference or any other identifier.
   */
  walletIdentifier?: string;
  /** The tax identifier of the person receiving the funds. */
  walletOwnerTaxId?: string;
  /** The purpose of a digital wallet transaction. */
  walletPurpose?: WalletPurpose;
};

export const fundRecipient1Schema: Schema<FundRecipient1> = s.object<FundRecipient1>({
  iban: s.optional(s.string()),
  billingAddress: s.optional(s.lazy(() => address3Schema)),
  paymentMethod: s.optional(s.lazy(() => cardDetails1Schema)),
  shopperEmail: s.optional(s.string()),
  shopperName: s.optional(s.lazy(() => name2Schema)),
  shopperReference: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  subMerchant: s.optional(s.lazy(() => subMerchant2Schema)),
  telephoneNumber: s.optional(s.string()),
  walletIdentifier: s.optional(s.string()),
  walletOwnerTaxId: s.optional(s.string()),
  walletPurpose: s.optional(s.lazy(() => walletPurposeSchema)),
  _keysMap: {
    iban: "IBAN",
  },
});

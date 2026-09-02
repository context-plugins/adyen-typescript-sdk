import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address3Schema, type Address3 } from "./address3.js";
import { cardDetails1Schema, type CardDetails1 } from "./card-details1.js";
import { name2Schema, type Name2 } from "./name2.js";
import { subMerchant2Schema, type SubMerchant2 } from "./sub-merchant2.js";
import { walletPurposeSchema, type WalletPurpose } from "./wallet-purpose.js";

export type FundRecipient = {
  iban?: string;
  billingAddress?: Address3;
  paymentMethod?: CardDetails1;
  shopperEmail?: string;
  shopperName?: Name2;
  shopperReference?: string;
  storedPaymentMethodId?: string;
  subMerchant?: SubMerchant2;
  telephoneNumber?: string;
  walletIdentifier?: string;
  walletOwnerTaxId?: string;
  walletPurpose?: WalletPurpose;
};

export const fundRecipientSchema: Schema<FundRecipient> = s.object<FundRecipient>({
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

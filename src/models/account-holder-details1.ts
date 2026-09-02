import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountDetailSchema, type BankAccountDetail } from "./bank-account-detail.js";
import { businessDetails3Schema, type BusinessDetails3 } from "./business-details3.js";
import { individualDetails3Schema, type IndividualDetails3 } from "./individual-details3.js";
import { legalArrangementDetailSchema, type LegalArrangementDetail } from "./legal-arrangement-detail.js";
import { payoutMethodSchema, type PayoutMethod } from "./payout-method.js";
import { storeDetailSchema, type StoreDetail } from "./store-detail.js";
import { viasAddress6Schema, type ViasAddress6 } from "./vias-address6.js";
import { viasAddress9Schema, type ViasAddress9 } from "./vias-address9.js";
import { viasPhoneNumber3Schema, type ViasPhoneNumber3 } from "./vias-phone-number3.js";

export type AccountHolderDetails1 = {
  address: ViasAddress9;
  bankAccountDetails?: BankAccountDetail[];
  bankAggregatorDataReference?: string;
  businessDetails?: BusinessDetails3;
  email?: string;
  fullPhoneNumber?: string;
  individualDetails?: IndividualDetails3;
  lastReviewDate?: string;
  legalArrangements?: LegalArrangementDetail[];
  merchantCategoryCode?: string;
  metadata?: Record<string, string>;
  payoutMethods?: PayoutMethod[];
  phoneNumber?: ViasPhoneNumber3;
  principalBusinessAddress?: ViasAddress6;
  storeDetails?: StoreDetail[];
  webAddress?: string;
};

export const accountHolderDetails1Schema: Schema<AccountHolderDetails1> = s.object<AccountHolderDetails1>({
  address: viasAddress9Schema,
  bankAccountDetails: s.optional(s.array(s.lazy(() => bankAccountDetailSchema))),
  bankAggregatorDataReference: s.optional(s.string()),
  businessDetails: s.optional(s.lazy(() => businessDetails3Schema)),
  email: s.optional(s.string()),
  fullPhoneNumber: s.optional(s.string()),
  individualDetails: s.optional(s.lazy(() => individualDetails3Schema)),
  lastReviewDate: s.optional(s.string()),
  legalArrangements: s.optional(s.array(s.lazy(() => legalArrangementDetailSchema))),
  merchantCategoryCode: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.string())),
  payoutMethods: s.optional(s.array(s.lazy(() => payoutMethodSchema))),
  phoneNumber: s.optional(s.lazy(() => viasPhoneNumber3Schema)),
  principalBusinessAddress: s.optional(s.lazy(() => viasAddress6Schema)),
  storeDetails: s.optional(s.array(s.lazy(() => storeDetailSchema))),
  webAddress: s.optional(s.string()),
});

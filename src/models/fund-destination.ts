import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { card1Schema, type Card1 } from "./card1.js";
import { nameSchema, type Name } from "./name.js";
import { subMerchantSchema, type SubMerchant } from "./sub-merchant.js";

export type FundDestination = {
  iban?: string;
  additionalData?: Record<string, string>;
  billingAddress?: Address;
  card?: Card1;
  selectedRecurringDetailReference?: string;
  shopperEmail?: string;
  shopperName?: Name;
  shopperReference?: string;
  subMerchant?: SubMerchant;
  telephoneNumber?: string;
  walletPurpose?: string;
};

export const fundDestinationSchema: Schema<FundDestination> = s.object<FundDestination>({
  iban: s.optional(s.string()),
  additionalData: s.optional(s.record(s.string(), s.string())),
  billingAddress: s.optional(s.lazy(() => addressSchema)),
  card: s.optional(s.lazy(() => card1Schema)),
  selectedRecurringDetailReference: s.optional(s.string()),
  shopperEmail: s.optional(s.string()),
  shopperName: s.optional(s.lazy(() => nameSchema)),
  shopperReference: s.optional(s.string()),
  subMerchant: s.optional(s.lazy(() => subMerchantSchema)),
  telephoneNumber: s.optional(s.string()),
  walletPurpose: s.optional(s.string()),
  _keysMap: {
    iban: "IBAN",
  },
});

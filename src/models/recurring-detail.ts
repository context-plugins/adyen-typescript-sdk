import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { bankAccountSchema, type BankAccount } from "./bank-account.js";
import { cardSchema, type Card } from "./card.js";
import { nameSchema, type Name } from "./name.js";
import { tokenDetailsSchema, type TokenDetails } from "./token-details.js";

export type RecurringDetail = {
  additionalData?: Record<string, string>;
  alias?: string;
  aliasType?: string;
  bank?: BankAccount;
  billingAddress?: Address;
  card?: Card;
  contractTypes?: string[];
  creationDate?: Date;
  firstPspReference?: string;
  name?: string;
  networkTxReference?: string;
  paymentMethodVariant?: string;
  recurringDetailReference: string;
  shopperName?: Name;
  socialSecurityNumber?: string;
  tokenDetails?: TokenDetails;
  transactionLinkId?: string;
  variant: string;
};

export const recurringDetailSchema: Schema<RecurringDetail> = s.object<RecurringDetail>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  alias: s.optional(s.string()),
  aliasType: s.optional(s.string()),
  bank: s.optional(s.lazy(() => bankAccountSchema)),
  billingAddress: s.optional(s.lazy(() => addressSchema)),
  card: s.optional(s.lazy(() => cardSchema)),
  contractTypes: s.optional(s.array(s.string())),
  creationDate: s.optional(s.dateTime()),
  firstPspReference: s.optional(s.string()),
  name: s.optional(s.string()),
  networkTxReference: s.optional(s.string()),
  paymentMethodVariant: s.optional(s.string()),
  recurringDetailReference: s.string(),
  shopperName: s.optional(s.lazy(() => nameSchema)),
  socialSecurityNumber: s.optional(s.string()),
  tokenDetails: s.optional(s.lazy(() => tokenDetailsSchema)),
  transactionLinkId: s.optional(s.string()),
  variant: s.string(),
});

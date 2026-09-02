import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { amountSchema, type Amount } from "./amount.js";
import { bankAccountSchema, type BankAccount } from "./bank-account.js";
import { cardSchema, type Card } from "./card.js";
import { entityType1Schema, type EntityType1 } from "./entity-type1.js";
import { nameSchema, type Name } from "./name.js";
import { recurringSchema, type Recurring } from "./recurring.js";

export type StoreDetailAndSubmitRequest = {
  additionalData?: Record<string, string>;
  amount: Amount;
  bank?: BankAccount;
  billingAddress?: Address;
  card?: Card;
  dateOfBirth: string;
  entityType: EntityType1;
  fraudOffset?: number;
  merchantAccount: string;
  nationality: string;
  recurring: Recurring;
  reference: string;
  selectedBrand?: string;
  shopperEmail: string;
  shopperName?: Name;
  shopperReference: string;
  shopperStatement?: string;
  socialSecurityNumber?: string;
  telephoneNumber?: string;
};

export const storeDetailAndSubmitRequestSchema: Schema<StoreDetailAndSubmitRequest> =
  s.object<StoreDetailAndSubmitRequest>({
    additionalData: s.optional(s.record(s.string(), s.string())),
    amount: amountSchema,
    bank: s.optional(s.lazy(() => bankAccountSchema)),
    billingAddress: s.optional(s.lazy(() => addressSchema)),
    card: s.optional(s.lazy(() => cardSchema)),
    dateOfBirth: s.dateOnly(),
    entityType: entityType1Schema,
    fraudOffset: s.optional(s.number()),
    merchantAccount: s.string(),
    nationality: s.string(),
    recurring: recurringSchema,
    reference: s.string(),
    selectedBrand: s.optional(s.string()),
    shopperEmail: s.string(),
    shopperName: s.optional(s.lazy(() => nameSchema)),
    shopperReference: s.string(),
    shopperStatement: s.optional(s.string()),
    socialSecurityNumber: s.optional(s.string()),
    telephoneNumber: s.optional(s.string()),
  });

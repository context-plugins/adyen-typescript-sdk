import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { amountSchema, type Amount } from "./amount.js";
import { cardSchema, type Card } from "./card.js";
import { fundSource11Schema, type FundSource11 } from "./fund-source11.js";
import { nameSchema, type Name } from "./name.js";
import { recurringSchema, type Recurring } from "./recurring.js";
import { shopperInteractionSchema, type ShopperInteraction } from "./shopper-interaction.js";

export type PayoutRequest = {
  amount: Amount;
  billingAddress?: Address;
  card?: Card;
  fraudOffset?: number;
  fundSource?: FundSource11;
  merchantAccount: string;
  recurring?: Recurring;
  reference: string;
  selectedRecurringDetailReference?: string;
  shopperEmail?: string;
  shopperInteraction?: ShopperInteraction;
  shopperName?: Name;
  shopperReference?: string;
  telephoneNumber?: string;
};

export const payoutRequestSchema: Schema<PayoutRequest> = s.object<PayoutRequest>({
  amount: amountSchema,
  billingAddress: s.optional(s.lazy(() => addressSchema)),
  card: s.optional(s.lazy(() => cardSchema)),
  fraudOffset: s.optional(s.number()),
  fundSource: s.optional(s.lazy(() => fundSource11Schema)),
  merchantAccount: s.string(),
  recurring: s.optional(s.lazy(() => recurringSchema)),
  reference: s.string(),
  selectedRecurringDetailReference: s.optional(s.string()),
  shopperEmail: s.optional(s.string()),
  shopperInteraction: s.optional(s.lazy(() => shopperInteractionSchema)),
  shopperName: s.optional(s.lazy(() => nameSchema)),
  shopperReference: s.optional(s.string()),
  telephoneNumber: s.optional(s.string()),
});

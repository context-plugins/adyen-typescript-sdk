import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { entityType2Schema, type EntityType2 } from "./entity-type2.js";
import { nameSchema, type Name } from "./name.js";
import { recurringSchema, type Recurring } from "./recurring.js";

export type SubmitRequest = {
  additionalData?: Record<string, string>;
  amount: Amount;
  dateOfBirth?: string;
  entityType?: EntityType2;
  fraudOffset?: number;
  merchantAccount: string;
  nationality?: string;
  recurring: Recurring;
  reference: string;
  selectedRecurringDetailReference: string;
  shopperEmail: string;
  shopperName?: Name;
  shopperReference: string;
  shopperStatement?: string;
  socialSecurityNumber?: string;
};

export const submitRequestSchema: Schema<SubmitRequest> = s.object<SubmitRequest>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  amount: amountSchema,
  dateOfBirth: s.optional(s.dateOnly()),
  entityType: s.optional(s.lazy(() => entityType2Schema)),
  fraudOffset: s.optional(s.number()),
  merchantAccount: s.string(),
  nationality: s.optional(s.string()),
  recurring: recurringSchema,
  reference: s.string(),
  selectedRecurringDetailReference: s.string(),
  shopperEmail: s.string(),
  shopperName: s.optional(s.lazy(() => nameSchema)),
  shopperReference: s.string(),
  shopperStatement: s.optional(s.string()),
  socialSecurityNumber: s.optional(s.string()),
});

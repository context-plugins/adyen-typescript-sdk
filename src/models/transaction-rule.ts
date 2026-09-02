import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { outcomeTypeSchema, type OutcomeType } from "./outcome-type.js";
import { purposeSchema, type Purpose } from "./purpose.js";
import { requestTypeSchema, type RequestType } from "./request-type.js";
import { status4Schema, type Status4 } from "./status4.js";
import {
  transactionRuleEntityKey2Schema,
  type TransactionRuleEntityKey2,
} from "./transaction-rule-entity-key2.js";
import {
  transactionRuleInterval1Schema,
  type TransactionRuleInterval1,
} from "./transaction-rule-interval1.js";
import {
  transactionRuleRestrictions1Schema,
  type TransactionRuleRestrictions1,
} from "./transaction-rule-restrictions1.js";
import { type391Schema, type Type391 } from "./type391.js";

export type TransactionRule = {
  aggregationLevel?: string;
  description: string;
  endDate?: string;
  entityKey: TransactionRuleEntityKey2;
  id?: string;
  interval: TransactionRuleInterval1;
  outcomeType?: OutcomeType;
  overridesRule?: string;
  purpose?: Purpose;
  reference: string;
  requestType?: RequestType;
  ruleRestrictions: TransactionRuleRestrictions1;
  score?: number;
  startDate?: string;
  status?: Status4;
  type: Type391;
};

export const transactionRuleSchema: Schema<TransactionRule> = s.object<TransactionRule>({
  aggregationLevel: s.optional(s.string()),
  description: s.string(),
  endDate: s.optional(s.string()),
  entityKey: transactionRuleEntityKey2Schema,
  id: s.optional(s.string()),
  interval: transactionRuleInterval1Schema,
  outcomeType: s.optional(s.lazy(() => outcomeTypeSchema)),
  overridesRule: s.optional(s.string()),
  purpose: s.optional(s.lazy(() => purposeSchema)),
  reference: s.string(),
  requestType: s.optional(s.lazy(() => requestTypeSchema)),
  ruleRestrictions: transactionRuleRestrictions1Schema,
  score: s.optional(s.number()),
  startDate: s.optional(s.string()),
  status: s.optional(s.lazy(() => status4Schema)),
  type: type391Schema,
});

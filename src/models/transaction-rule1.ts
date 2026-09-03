import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { outcomeTypeSchema, type OutcomeType } from "./outcome-type.js";
import { purposeSchema, type Purpose } from "./purpose.js";
import { requestTypeSchema, type RequestType } from "./request-type.js";
import { status6Schema, type Status6 } from "./status6.js";
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
import { type141Schema, type Type141 } from "./type141.js";

export type TransactionRule1 = {
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
  status?: Status6;
  type: Type141;
};

export const transactionRule1Schema: Schema<TransactionRule1> = s.object<TransactionRule1>({
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
  status: s.optional(s.lazy(() => status6Schema)),
  type: type141Schema,
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionRuleEntityKey2 = {
  entityReference?: string;
  entityType?: string;
};

export const transactionRuleEntityKey2Schema: Schema<TransactionRuleEntityKey2> =
  s.object<TransactionRuleEntityKey2>({
    entityReference: s.optional(s.string()),
    entityType: s.optional(s.string()),
  });

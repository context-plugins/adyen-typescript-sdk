import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionRuleEntityKey = {
  entityReference?: string;
  entityType?: string;
};

export const transactionRuleEntityKeySchema: Schema<TransactionRuleEntityKey> =
  s.object<TransactionRuleEntityKey>({
    entityReference: s.optional(s.string()),
    entityType: s.optional(s.string()),
  });

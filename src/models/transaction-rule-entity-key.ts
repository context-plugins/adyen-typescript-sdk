import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionRuleEntityKey = {
  /** The unique identifier of the resource. */
  entityReference?: string;
  /**
   * The type of resource.
   *
   * Possible values: **balancePlatform**, **paymentInstrumentGroup**, **accountHolder**,
   * **balanceAccount**, or **paymentInstrument**.
   */
  entityType?: string;
};

export const transactionRuleEntityKeySchema: Schema<TransactionRuleEntityKey> =
  s.object<TransactionRuleEntityKey>({
    entityReference: s.optional(s.string()),
    entityType: s.optional(s.string()),
  });

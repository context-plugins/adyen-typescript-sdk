import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The type and unique identifier of the resource to which the rule applies. */
export type TransactionRuleEntityKey2 = {
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

export const transactionRuleEntityKey2Schema: Schema<TransactionRuleEntityKey2> =
  s.object<TransactionRuleEntityKey2>({
    entityReference: s.optional(s.string()),
    entityType: s.optional(s.string()),
  });

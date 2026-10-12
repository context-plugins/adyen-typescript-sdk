import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status6Schema, type Status6 } from "./status6.js";
import { topUpAmount1Schema, type TopUpAmount1 } from "./top-up-amount1.js";
import { topUpCounterparty1Schema, type TopUpCounterparty1 } from "./top-up-counterparty1.js";
import { trigger1Schema, type Trigger1 } from "./trigger1.js";

export type CreateRecurringTopUp = {
  /** The details about the counterparty that is funding the top-up. */
  counterparty: TopUpCounterparty1;
  /**
   * Your description for the recurring top-up.
   *
   * Maximum length is 140 characters. If you set a longer description, it will be cut off at 140
   * characters.
   */
  description: string;
  /**
   * A reference that is sent to the recipient. This reference is also sent in all webhooks related
   * to the transfer, so you can use it to track statuses for both parties involved in the funds
   * movement.
   *
   * Supported characters: **a-z**, **A-Z**, **0-9**.
   */
  referenceForBeneficiary?: string;
  /**
   * The status of the recurring top-up. If not provided, by default, this is set to **active**.
   *
   * Possible values:
   *
   *  * **active**: the top up is enabled and funds will be pulled in.
   *
   *  * **inactive**: the top up is disabled and cannot be triggered.
   */
  status?: Status6;
  /**
   * The currency and value to be added to the balance account, specified in minor units. This can
   * be a fixed amount or a target amount.
   */
  topUpAmount: TopUpAmount1;
  /**
   * The condition that triggers the top-up. This can be a recurring schedule or a minimum balance
   * threshold.
   */
  trigger: Trigger1;
};

export const createRecurringTopUpSchema: Schema<CreateRecurringTopUp> = s.object<CreateRecurringTopUp>({
  counterparty: topUpCounterparty1Schema,
  description: s.string(),
  referenceForBeneficiary: s.optional(s.string()),
  status: s.optional(s.lazy(() => status6Schema)),
  topUpAmount: topUpAmount1Schema,
  trigger: trigger1Schema,
});

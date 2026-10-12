import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { patchableTopUpAmount2Schema, type PatchableTopUpAmount2 } from "./patchable-top-up-amount2.js";
import { patchableTrigger2Schema, type PatchableTrigger2 } from "./patchable-trigger2.js";
import { status6Schema, type Status6 } from "./status6.js";

export type PatchableCreateRecurringTopUp = {
  /**
   * Your description for the recurring top-up.
   *
   * Maximum length is 140 characters. If you set a longer description, it will be cut off at 140
   * characters.
   */
  description?: string;
  /**
   * A reference that is sent to the recipient. This reference is also sent in all webhooks related
   * to the transfer, so you can use it to track statuses for both parties involved in the funds
   * movement.
   *
   * Supported characters: **a-z**, **A-Z**, **0-9**.
   */
  referenceForBeneficiary?: string | null;
  /**
   * The status of the recurring top-up. If not provided, by default, this is set to **active**.
   *
   * Possible values:
   *
   *  * **active**: the top up is enabled and funds will be pulled in.
   *
   *  * **inactive**: the top up is disabled and cannot be triggered.
   */
  status?: Status6 | null;
  /**
   * The currency and value to be added to the balance account, specified in minor units. This can
   * be a fixed amount or a target amount.
   */
  topUpAmount?: PatchableTopUpAmount2;
  /**
   * The condition that triggers the top-up. This can be a recurring schedule or a minimum balance
   * threshold.
   */
  trigger?: PatchableTrigger2;
};

export const patchableCreateRecurringTopUpSchema: Schema<PatchableCreateRecurringTopUp> =
  s.object<PatchableCreateRecurringTopUp>({
    description: s.optional(s.string()),
    referenceForBeneficiary: s.optionalNullable(s.string()),
    status: s.optionalNullable(s.lazy(() => status6Schema)),
    topUpAmount: s.optional(s.lazy(() => patchableTopUpAmount2Schema)),
    trigger: s.optional(s.lazy(() => patchableTrigger2Schema)),
  });

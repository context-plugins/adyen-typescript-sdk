import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { behaviorSchema, type Behavior } from "./behavior.js";

/**
 * Defines how to book chargebacks when using [Adyen for
 * Platforms](https://docs.adyen.com/adyen-for-platforms-model).
 */
export type PlatformChargebackLogic = {
  /**
   * The method of handling the chargeback.
   *
   * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**,
   * **deductAccordingToSplitRatio**.
   */
  behavior?: Behavior;
  /**
   * The unique identifier of the balance account to which the chargeback fees are booked. By
   * default, the chargeback fees are booked to your liable balance account.
   */
  costAllocationAccount?: string;
  /**
   * The unique identifier of the balance account against which the disputed amount is booked.
   *
   * Required if `behavior` is **deductFromOneBalanceAccount**.
   */
  targetAccount?: string;
};

export const platformChargebackLogicSchema: Schema<PlatformChargebackLogic> =
  s.object<PlatformChargebackLogic>({
    behavior: s.optional(s.lazy(() => behaviorSchema)),
    costAllocationAccount: s.optional(s.string()),
    targetAccount: s.optional(s.string()),
  });

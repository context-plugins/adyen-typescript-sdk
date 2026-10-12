import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { behaviorSchema, type Behavior } from "./behavior.js";

/**
 * Dictates the behavior of how a potential chargeback should be booked when using Adyen Platforms.
 */
export type PlatformChargebackLogic4 = {
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

export const platformChargebackLogic4Schema: Schema<PlatformChargebackLogic4> =
  s.object<PlatformChargebackLogic4>({
    behavior: s.optional(s.lazy(() => behaviorSchema)),
    costAllocationAccount: s.optional(s.string()),
    targetAccount: s.optional(s.string()),
  });

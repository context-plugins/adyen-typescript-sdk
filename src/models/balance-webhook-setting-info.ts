import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conditionSchema, type Condition } from "./condition.js";
import { status6Schema, type Status6 } from "./status6.js";
import { target1Schema, type Target1 } from "./target1.js";

export type BalanceWebhookSettingInfo = {
  /** The array of conditions a balance change must meet for Adyen to send the webhook. */
  conditions?: Condition[];
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes) of the balance.
   */
  currency: string;
  /**
   * The status of the webhook setting. Possible values:
   *
   * * **active**: You receive a balance webhook if any of the conditions in this setting are met.
   * * **inactive**: You do not receive a balance webhook even if the conditions in this settings
   *   are met.
   */
  status: Status6;
  /** The type and ID of the resource about whose balance changes you want to be notified. */
  target: Target1;
  /** The type of the webhook you are configuring. Set to **balance**. @default "balance" */
  type?: "balance";
};

export const balanceWebhookSettingInfoSchema: Schema<BalanceWebhookSettingInfo> =
  s.object<BalanceWebhookSettingInfo>({
    conditions: s.optional(s.array(s.lazy(() => conditionSchema))),
    currency: s.string(),
    status: status6Schema,
    target: target1Schema,
    type: s.defaulted(s.literal("balance"), "balance"),
  });

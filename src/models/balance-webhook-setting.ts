import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conditionSchema, type Condition } from "./condition.js";
import { target3Schema, type Target3 } from "./target3.js";

/** All Of WebhookSetting, BalanceWebhookSetting. */
export type BalanceWebhookSetting = {
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes) of the balance.
   */
  currency: string;
  /** The unique identifier of the webhook setting. */
  id: string;
  /**
   * The status of the webhook setting. Possible values:
   *
   * * **active**: You receive a balance webhook if any of the conditions in this setting are met.
   * * **inactive**: You do not receive a balance webhook even if the conditions in this settings
   *   are met.
   */
  status: string;
  /** The resource about whose balance change you want to get notified. */
  target: Target3;
  type?: string;
  /**
   * The list of settings and criteria for triggering the [balance
   * webhook](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).
   */
  conditions?: Condition[];
};

export const balanceWebhookSettingSchema: Schema<BalanceWebhookSetting> = s.object<BalanceWebhookSetting>({
  currency: s.string(),
  id: s.string(),
  status: s.string(),
  target: target3Schema,
  type: s.optional(s.string()),
  conditions: s.optional(s.array(s.lazy(() => conditionSchema))),
});

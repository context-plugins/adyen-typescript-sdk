import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conditionSchema, type Condition } from "./condition.js";
import { status6Schema, type Status6 } from "./status6.js";
import { targetUpdate2Schema, type TargetUpdate2 } from "./target-update2.js";
import { type201Schema, type Type201 } from "./type201.js";

export type BalanceWebhookSettingInfoUpdate = {
  /** The array of conditions a balance change must meet for Adyen to send the webhook. */
  conditions?: Condition[] | null;
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes) of the balance.
   */
  currency?: string;
  /**
   * The status of the webhook setting. Possible values:
   *
   * * **active**: You receive a balance webhook if any of the conditions in this setting are met.
   * * **inactive**: You do not receive a balance webhook even if the conditions in this settings
   *   are met.
   */
  status?: Status6;
  /** The type and ID of the resource about whose balance changes you want to be notified. */
  target?: TargetUpdate2;
  /** The type of the webhook you are configuring. Set to **balance**. */
  type?: Type201;
};

export const balanceWebhookSettingInfoUpdateSchema: Schema<BalanceWebhookSettingInfoUpdate> =
  s.object<BalanceWebhookSettingInfoUpdate>({
    conditions: s.optionalNullable(s.array(s.lazy(() => conditionSchema))),
    currency: s.optional(s.string()),
    status: s.optional(s.lazy(() => status6Schema)),
    target: s.optional(s.lazy(() => targetUpdate2Schema)),
    type: s.optional(s.lazy(() => type201Schema)),
  });

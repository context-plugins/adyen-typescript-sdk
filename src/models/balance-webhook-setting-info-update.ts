import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conditionSchema, type Condition } from "./condition.js";
import { status4Schema, type Status4 } from "./status4.js";
import { targetUpdate2Schema, type TargetUpdate2 } from "./target-update2.js";
import { type471Schema, type Type471 } from "./type471.js";

export type BalanceWebhookSettingInfoUpdate = {
  conditions?: Condition[] | null;
  currency?: string;
  status?: Status4;
  target?: TargetUpdate2;
  type?: Type471;
};

export const balanceWebhookSettingInfoUpdateSchema: Schema<BalanceWebhookSettingInfoUpdate> =
  s.object<BalanceWebhookSettingInfoUpdate>({
    conditions: s.optionalNullable(s.array(s.lazy(() => conditionSchema))),
    currency: s.optional(s.string()),
    status: s.optional(s.lazy(() => status4Schema)),
    target: s.optional(s.lazy(() => targetUpdate2Schema)),
    type: s.optional(s.lazy(() => type471Schema)),
  });

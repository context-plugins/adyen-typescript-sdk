import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conditionSchema, type Condition } from "./condition.js";
import { status6Schema, type Status6 } from "./status6.js";
import { targetUpdate2Schema, type TargetUpdate2 } from "./target-update2.js";
import { type201Schema, type Type201 } from "./type201.js";

export type BalanceWebhookSettingInfoUpdate = {
  conditions?: Condition[] | null;
  currency?: string;
  status?: Status6;
  target?: TargetUpdate2;
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

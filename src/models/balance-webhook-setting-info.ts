import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conditionSchema, type Condition } from "./condition.js";
import { status4Schema, type Status4 } from "./status4.js";
import { target1Schema, type Target1 } from "./target1.js";
import { type471Schema, type Type471 } from "./type471.js";

export type BalanceWebhookSettingInfo = {
  conditions?: Condition[];
  currency: string;
  status: Status4;
  target: Target1;
  type: Type471;
};

export const balanceWebhookSettingInfoSchema: Schema<BalanceWebhookSettingInfo> =
  s.object<BalanceWebhookSettingInfo>({
    conditions: s.optional(s.array(s.lazy(() => conditionSchema))),
    currency: s.string(),
    status: status4Schema,
    target: target1Schema,
    type: type471Schema,
  });

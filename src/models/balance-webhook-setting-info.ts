import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conditionSchema, type Condition } from "./condition.js";
import { status6Schema, type Status6 } from "./status6.js";
import { target1Schema, type Target1 } from "./target1.js";

export type BalanceWebhookSettingInfo = {
  conditions?: Condition[];
  currency: string;
  status: Status6;
  target: Target1;
  type: "balance";
};

export const balanceWebhookSettingInfoSchema: Schema<BalanceWebhookSettingInfo> =
  s.object<BalanceWebhookSettingInfo>({
    conditions: s.optional(s.array(s.lazy(() => conditionSchema))),
    currency: s.string(),
    status: status6Schema,
    target: target1Schema,
    type: s.literal("balance"),
  });

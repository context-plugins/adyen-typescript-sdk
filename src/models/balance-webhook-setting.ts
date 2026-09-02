import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conditionSchema, type Condition } from "./condition.js";
import { target3Schema, type Target3 } from "./target3.js";

export type BalanceWebhookSetting = {
  currency: string;
  id: string;
  status: string;
  target: Target3;
  type?: string;
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

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { balanceWebhookSettingSchema, type BalanceWebhookSetting } from "../balance-webhook-setting.js";

export type WebhookSetting = BalanceWebhookSetting & { type: "balance" };

export const webhookSettingSchema: Schema<WebhookSetting> = s.discriminatedUnion<WebhookSetting>("type", {
  balance: balanceWebhookSettingSchema,
});

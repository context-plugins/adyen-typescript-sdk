import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { webhookSettingSchema, type WebhookSetting } from "./unions/webhook-setting.js";

export type WebhookSettings = {
  /** The list of webhook settings. */
  webhookSettings?: WebhookSetting[];
};

export const webhookSettingsSchema: Schema<WebhookSettings> = s.object<WebhookSettings>({
  webhookSettings: s.optional(s.array(s.lazy(() => webhookSettingSchema))),
});

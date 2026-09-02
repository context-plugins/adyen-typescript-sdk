import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customNotification1Schema, type CustomNotification1 } from "./custom-notification1.js";

export type TestWebhookRequest = {
  notification?: CustomNotification1;
  types?: string[];
};

export const testWebhookRequestSchema: Schema<TestWebhookRequest> = s.object<TestWebhookRequest>({
  notification: s.optional(s.lazy(() => customNotification1Schema)),
  types: s.optional(s.array(s.string())),
});

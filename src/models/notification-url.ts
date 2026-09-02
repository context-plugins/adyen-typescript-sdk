import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";

export type NotificationUrl = {
  localUrls?: Url[];
  publicUrls?: Url[];
};

export const notificationUrlSchema: Schema<NotificationUrl> = s.object<NotificationUrl>({
  localUrls: s.optional(s.array(s.lazy(() => urlSchema))),
  publicUrls: s.optional(s.array(s.lazy(() => urlSchema))),
});

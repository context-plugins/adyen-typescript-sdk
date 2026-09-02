import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";

export type NotificationUrl2 = {
  localUrls?: Url[];
  publicUrls?: Url[];
};

export const notificationUrl2Schema: Schema<NotificationUrl2> = s.object<NotificationUrl2>({
  localUrls: s.optional(s.array(s.lazy(() => urlSchema))),
  publicUrls: s.optional(s.array(s.lazy(() => urlSchema))),
});

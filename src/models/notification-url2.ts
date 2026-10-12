import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";

/** The list of local and public URLs to send display notifications to when using Terminal API. */
export type NotificationUrl2 = {
  /** One or more local URLs to send notifications to when using Terminal API. */
  localUrls?: Url[];
  /** One or more public URLs to send notifications to when using Terminal API. */
  publicUrls?: Url[];
};

export const notificationUrl2Schema: Schema<NotificationUrl2> = s.object<NotificationUrl2>({
  localUrls: s.optional(s.array(s.lazy(() => urlSchema))),
  publicUrls: s.optional(s.array(s.lazy(() => urlSchema))),
});

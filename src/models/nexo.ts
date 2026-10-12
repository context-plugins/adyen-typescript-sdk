import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventUrl2Schema, type EventUrl2 } from "./event-url2.js";
import { key1Schema, type Key1 } from "./key1.js";
import { notificationUrl2Schema, type NotificationUrl2 } from "./notification-url2.js";
import { notification2Schema, type Notification2 } from "./notification2.js";

export type Nexo = {
  /** The list of local and public URLs to send display notifications to when using Terminal API. */
  displayUrls?: NotificationUrl2;
  /** The key you share with Adyen to secure local communications when using Terminal API. */
  encryptionKey?: Key1;
  /** The list of local and public URLs to send event notifications to when using Terminal API. */
  eventUrls?: EventUrl2;
  /**
   * One or more URLs to send event messages to when using Terminal API.
   *
   * @deprecated
   */
  nexoEventUrls?: string[];
  /**
   * Configures sending event notifications by pressing a button on a terminal, for example used for
   * pay-at-table.
   */
  notification?: Notification2;
};

export const nexoSchema: Schema<Nexo> = s.object<Nexo>({
  displayUrls: s.optional(s.lazy(() => notificationUrl2Schema)),
  encryptionKey: s.optional(s.lazy(() => key1Schema)),
  eventUrls: s.optional(s.lazy(() => eventUrl2Schema)),
  nexoEventUrls: s.optional(s.array(s.string())),
  notification: s.optional(s.lazy(() => notification2Schema)),
});

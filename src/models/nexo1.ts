import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventUrl2Schema, type EventUrl2 } from "./event-url2.js";
import { key1Schema, type Key1 } from "./key1.js";
import { notificationUrl2Schema, type NotificationUrl2 } from "./notification-url2.js";
import { notification2Schema, type Notification2 } from "./notification2.js";

export type Nexo1 = {
  displayUrls?: NotificationUrl2;
  encryptionKey?: Key1;
  eventUrls?: EventUrl2;
  nexoEventUrls?: string[];
  notification?: Notification2;
};

export const nexo1Schema: Schema<Nexo1> = s.object<Nexo1>({
  displayUrls: s.optional(s.lazy(() => notificationUrl2Schema)),
  encryptionKey: s.optional(s.lazy(() => key1Schema)),
  eventUrls: s.optional(s.lazy(() => eventUrl2Schema)),
  nexoEventUrls: s.optional(s.array(s.string())),
  notification: s.optional(s.lazy(() => notification2Schema)),
});

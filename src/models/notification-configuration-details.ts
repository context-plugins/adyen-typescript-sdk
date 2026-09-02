import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  notificationEventConfigurationSchema,
  type NotificationEventConfiguration,
} from "./notification-event-configuration.js";
import { sslProtocolSchema, type SslProtocol } from "./ssl-protocol.js";

export type NotificationConfigurationDetails = {
  active?: boolean;
  apiVersion?: number;
  description?: string;
  eventConfigs?: NotificationEventConfiguration[];
  hmacSignatureKey?: string;
  notificationId?: number;
  notifyPassword?: string;
  notifyUrl?: string;
  notifyUsername?: string;
  sslProtocol?: SslProtocol;
};

export const notificationConfigurationDetailsSchema: Schema<NotificationConfigurationDetails> =
  s.object<NotificationConfigurationDetails>({
    active: s.optional(s.boolean()),
    apiVersion: s.optional(s.number()),
    description: s.optional(s.string()),
    eventConfigs: s.optional(s.array(s.lazy(() => notificationEventConfigurationSchema))),
    hmacSignatureKey: s.optional(s.string()),
    notificationId: s.optional(s.number()),
    notifyPassword: s.optional(s.string()),
    notifyUrl: s.optional(s.string()),
    notifyUsername: s.optional(s.string()),
    sslProtocol: s.optional(s.lazy(() => sslProtocolSchema)),
    _keysMap: {
      notifyUrl: "notifyURL",
    },
  });

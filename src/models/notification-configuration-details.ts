import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  notificationEventConfigurationSchema,
  type NotificationEventConfiguration,
} from "./notification-event-configuration.js";
import { sslProtocolSchema, type SslProtocol } from "./ssl-protocol.js";

export type NotificationConfigurationDetails = {
  /** Indicates whether the notification subscription is active. */
  active?: boolean;
  /**
   * The version of the notification to which you are subscribing. To make sure that your
   * integration can properly process the notification, subscribe to the same version as the API
   * that you're using.
   */
  apiVersion?: number;
  /** A description of the notification subscription configuration. */
  description?: string;
  /** Contains objects that define event types and their subscription settings. */
  eventConfigs?: NotificationEventConfiguration[];
  /**
   * A string with which to salt the notification(s) before hashing. If this field is provided, a
   * hash value will be included under the notification header `HmacSignature` and the hash protocol
   * will be included under the notification header `Protocol`. A notification body along with its
   * `hmacSignatureKey` and `Protocol` can be used to calculate a hash value; matching this hash
   * value with the `HmacSignature` will ensure that the notification body has not been tampered
   * with or corrupted.
   *
   * >Must be a 32-byte hex-encoded string (i.e. a string containing 64 hexadecimal characters; e.g.
   * "b0ea55c2fe60d4d1d605e9c385e0e7f7e6cafbb939ce07010f31a327a0871f27").
   *
   * The omission of this field will preclude the provision of the `HmacSignature` and `Protocol`
   * headers in notification(s).
   */
  hmacSignatureKey?: string;
  /**
   * Adyen-generated ID for the entry, returned in the response when you create a notification
   * configuration. Required when updating an existing configuration using
   * [`/updateNotificationConfiguration`](https://docs.adyen.com/api-explorer/#/NotificationConfigurationService/latest/post/updateNotificationConfiguration).
   */
  notificationId?: number;
  /** The password to use when accessing the notifyURL with the specified username. */
  notifyPassword?: string;
  /** The URL to which the notifications are to be sent. */
  notifyUrl?: string;
  /** The username to use when accessing the notifyURL. */
  notifyUsername?: string;
  /** The SSL protocol employed by the endpoint. >Permitted values: `TLSv12`, `TLSv13`. */
  sslProtocol?: SslProtocol;
};

export const notificationConfigurationDetailsSchema: Schema<NotificationConfigurationDetails> =
  s.object<NotificationConfigurationDetails>({
    active: s.optional(s.boolean()),
    apiVersion: s.optional(s.int()),
    description: s.optional(s.string()),
    eventConfigs: s.optional(s.array(s.lazy(() => notificationEventConfigurationSchema))),
    hmacSignatureKey: s.optional(s.string()),
    notificationId: s.optional(s.int()),
    notifyPassword: s.optional(s.string()),
    notifyUrl: s.optional(s.string()),
    notifyUsername: s.optional(s.string()),
    sslProtocol: s.optional(s.lazy(() => sslProtocolSchema)),
    _keysMap: {
      notifyUrl: "notifyURL",
    },
  });

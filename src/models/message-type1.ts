import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of message of the Sale to POI protocol. Possible values:
 * * **Notification**
 * * **Request**
 * * **Response**
 */
export const MessageType1 = {
  Request: "Request",
  Response: "Response",
  Notification: "Notification",
} as const;
export type MessageType1 = (typeof MessageType1)[keyof typeof MessageType1] | (string & {});

export const messageType1Schema: EnumSchema<MessageType1> = s.enumOf<MessageType1>(MessageType1);

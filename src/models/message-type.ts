import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Possible values:
 * * **Request**
 * * **Response**
 * * **Notification**
 */
export const MessageType = {
  Request: "Request",
  Response: "Response",
  Notification: "Notification",
} as const;
export type MessageType = (typeof MessageType)[keyof typeof MessageType] | (string & {});

export const messageTypeSchema: EnumSchema<MessageType> = s.enumOf<MessageType>(MessageType);

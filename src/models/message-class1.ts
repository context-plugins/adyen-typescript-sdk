import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Class of the message. Possible values:
 * * **Device**
 * * **Event**
 * * **Service**
 */
export const MessageClass1 = {
  Service: "Service",
  Device: "Device",
  Event: "Event",
} as const;
export type MessageClass1 = (typeof MessageClass1)[keyof typeof MessageClass1] | (string & {});

export const messageClass1Schema: EnumSchema<MessageClass1> = s.enumOf<MessageClass1>(MessageClass1);

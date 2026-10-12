import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Possible values:
 * * **Service**
 * * **Device**
 * * **Event**
 */
export const MessageClass = {
  Service: "Service",
  Device: "Device",
  Event: "Event",
} as const;
export type MessageClass = (typeof MessageClass)[keyof typeof MessageClass] | (string & {});

export const messageClassSchema: EnumSchema<MessageClass> = s.enumOf<MessageClass>(MessageClass);

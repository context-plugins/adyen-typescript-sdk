import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The event. >Permitted values: `InactivateAccount`, `RefundNotPaidOutTransfers`. For more
 * information, refer to [Verification
 * checks](https://docs.adyen.com/classic-platforms/verification-process).
 */
export const Event = {
  InactivateAccount: "InactivateAccount",
  RefundNotPaidOutTransfers: "RefundNotPaidOutTransfers",
} as const;
export type Event = (typeof Event)[keyof typeof Event] | (string & {});

export const eventSchema: EnumSchema<Event> = s.enumOf<Event>(Event);

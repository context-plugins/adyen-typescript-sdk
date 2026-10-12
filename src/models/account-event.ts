import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";

export type AccountEvent = {
  /**
   * The event. >Permitted values: `InactivateAccount`, `RefundNotPaidOutTransfers`. For more
   * information, refer to [Verification
   * checks](https://docs.adyen.com/classic-platforms/verification-process).
   */
  event?: Event;
  /** The date on which the event will take place. */
  executionDate?: Date;
  /** The reason why this event has been created. */
  reason?: string;
};

export const accountEventSchema: Schema<AccountEvent> = s.object<AccountEvent>({
  event: s.optional(s.lazy(() => eventSchema)),
  executionDate: s.optional(s.dateTime()),
  reason: s.optional(s.string()),
});

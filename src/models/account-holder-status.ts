import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountEventSchema, type AccountEvent } from "./account-event.js";
import { accountPayoutState2Schema, type AccountPayoutState2 } from "./account-payout-state2.js";
import { accountProcessingState2Schema, type AccountProcessingState2 } from "./account-processing-state2.js";
import { status12Schema, type Status12 } from "./status12.js";

export type AccountHolderStatus = {
  /** A list of events scheduled for the account holder. */
  events?: AccountEvent[];
  /** The payout state of the account holder. */
  payoutState?: AccountPayoutState2;
  /** The processing state of the account holder. */
  processingState?: AccountProcessingState2;
  /**
   * The status of the account holder. >Permitted values: `Active`, `Inactive`, `Suspended`,
   * `Closed`.
   */
  status: Status12;
  /** The reason why the status was assigned to the account holder. */
  statusReason?: string;
};

export const accountHolderStatusSchema: Schema<AccountHolderStatus> = s.object<AccountHolderStatus>({
  events: s.optional(s.array(s.lazy(() => accountEventSchema))),
  payoutState: s.optional(s.lazy(() => accountPayoutState2Schema)),
  processingState: s.optional(s.lazy(() => accountProcessingState2Schema)),
  status: status12Schema,
  statusReason: s.optional(s.string()),
});

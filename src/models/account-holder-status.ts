import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountEventSchema, type AccountEvent } from "./account-event.js";
import { accountPayoutState2Schema, type AccountPayoutState2 } from "./account-payout-state2.js";
import { accountProcessingState2Schema, type AccountProcessingState2 } from "./account-processing-state2.js";
import { status12Schema, type Status12 } from "./status12.js";

export type AccountHolderStatus = {
  events?: AccountEvent[];
  payoutState?: AccountPayoutState2;
  processingState?: AccountProcessingState2;
  status: Status12;
  statusReason?: string;
};

export const accountHolderStatusSchema: Schema<AccountHolderStatus> = s.object<AccountHolderStatus>({
  events: s.optional(s.array(s.lazy(() => accountEventSchema))),
  payoutState: s.optional(s.lazy(() => accountPayoutState2Schema)),
  processingState: s.optional(s.lazy(() => accountProcessingState2Schema)),
  status: status12Schema,
  statusReason: s.optional(s.string()),
});

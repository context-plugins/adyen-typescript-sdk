import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountEventSchema, type AccountEvent } from "./account-event.js";
import { accountPayoutState2Schema, type AccountPayoutState2 } from "./account-payout-state2.js";
import { accountProcessingState2Schema, type AccountProcessingState2 } from "./account-processing-state2.js";
import { status13Schema, type Status13 } from "./status13.js";

export type AccountHolderStatus1 = {
  events?: AccountEvent[];
  payoutState?: AccountPayoutState2;
  processingState?: AccountProcessingState2;
  status: Status13;
  statusReason?: string;
};

export const accountHolderStatus1Schema: Schema<AccountHolderStatus1> = s.object<AccountHolderStatus1>({
  events: s.optional(s.array(s.lazy(() => accountEventSchema))),
  payoutState: s.optional(s.lazy(() => accountPayoutState2Schema)),
  processingState: s.optional(s.lazy(() => accountProcessingState2Schema)),
  status: status13Schema,
  statusReason: s.optional(s.string()),
});

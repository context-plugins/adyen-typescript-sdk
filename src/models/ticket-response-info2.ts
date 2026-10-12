import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** **ticket** (Edenred Brazil) details */
export type TicketResponseInfo2 = {
  /** Ticket requestorId */
  requestorId?: string;
};

export const ticketResponseInfo2Schema: Schema<TicketResponseInfo2> = s.object<TicketResponseInfo2>({
  requestorId: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details to provide if `type` is **ticket** (Edenred Brazil). */
export type TicketInfo2 = {
  /** Ticket requestorId */
  requestorId?: string;
};

export const ticketInfo2Schema: Schema<TicketInfo2> = s.object<TicketInfo2>({
  requestorId: s.optional(s.string()),
});

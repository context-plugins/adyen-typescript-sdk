import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TicketInfo2 = {
  requestorId?: string;
};

export const ticketInfo2Schema: Schema<TicketInfo2> = s.object<TicketInfo2>({
  requestorId: s.optional(s.string()),
});

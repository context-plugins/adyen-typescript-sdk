import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TicketResponseInfo = {
  /** Ticket requestorId */
  requestorId?: string;
};

export const ticketResponseInfoSchema: Schema<TicketResponseInfo> = s.object<TicketResponseInfo>({
  requestorId: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TicketInfo = {
  requestorId?: string;
};

export const ticketInfoSchema: Schema<TicketInfo> = s.object<TicketInfo>({
  requestorId: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Ticket = {
  issueAddress?: string;
  issueDate?: string;
  number?: string;
};

export const ticketSchema: Schema<Ticket> = s.object<Ticket>({
  issueAddress: s.optional(s.string()),
  issueDate: s.optional(s.dateOnly()),
  number: s.optional(s.string()),
});

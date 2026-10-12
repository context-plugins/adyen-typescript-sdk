import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Ticket = {
  /**
   * The address of the organization that issued the ticket.
   * * minLength: 0 characters
   * * maxLength: 16 characters
   * * **additionalData key:** `airline.ticket_issue_address`
   */
  issueAddress?: string;
  /**
   * The date that the ticket was issued to the passenger.
   * * minLength: 10 characters
   * * maxLength: 10 characters
   * * Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd
   * * **additionalData key:** `airline.issue_date`
   */
  issueDate?: string;
  /**
   * The ticket's unique identifier.
   * * minLength: 1 character
   * * maxLength: 15 characters
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `airline.ticket_number`
   */
  number?: string;
};

export const ticketSchema: Schema<Ticket> = s.object<Ticket>({
  issueAddress: s.optional(s.string()),
  issueDate: s.optional(s.dateOnly()),
  number: s.optional(s.string()),
});

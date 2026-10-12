import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { leg1Schema, type Leg1 } from "./leg1.js";

/** Airline information. */
export type Airline11 = {
  /** Details about the flight legs for this ticket. */
  legs?: Leg1[];
  /** The ticket's unique identifier */
  ticketNumber?: string;
};

export const airline11Schema: Schema<Airline11> = s.object<Airline11>({
  legs: s.optional(s.array(s.lazy(() => leg1Schema))),
  ticketNumber: s.optional(s.string()),
});

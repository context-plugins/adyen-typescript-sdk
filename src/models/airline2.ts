import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { leg1Schema, type Leg1 } from "./leg1.js";

export type Airline2 = {
  legs?: Leg1[];
  ticketNumber?: string;
};

export const airline2Schema: Schema<Airline2> = s.object<Airline2>({
  legs: s.optional(s.array(s.lazy(() => leg1Schema))),
  ticketNumber: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { leg1Schema, type Leg1 } from "./leg1.js";

export type Airline11 = {
  legs?: Leg1[];
  ticketNumber?: string;
};

export const airline11Schema: Schema<Airline11> = s.object<Airline11>({
  legs: s.optional(s.array(s.lazy(() => leg1Schema))),
  ticketNumber: s.optional(s.string()),
});

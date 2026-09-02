import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Timeouts2 = {
  fromActiveToSleep?: number;
};

export const timeouts2Schema: Schema<Timeouts2> = s.object<Timeouts2>({
  fromActiveToSleep: s.optional(s.number()),
});

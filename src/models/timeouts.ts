import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Timeouts = {
  fromActiveToSleep?: number;
};

export const timeoutsSchema: Schema<Timeouts> = s.object<Timeouts>({
  fromActiveToSleep: s.optional(s.number()),
});

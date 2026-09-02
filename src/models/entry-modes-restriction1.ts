import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { value2Schema, type Value2 } from "./value2.js";

export type EntryModesRestriction1 = {
  operation: string;
  value?: Value2[];
};

export const entryModesRestriction1Schema: Schema<EntryModesRestriction1> = s.object<EntryModesRestriction1>({
  operation: s.string(),
  value: s.optional(s.array(s.lazy(() => value2Schema))),
});

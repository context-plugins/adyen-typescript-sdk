import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { value2Schema, type Value2 } from "./value2.js";

export type EntryModesRestriction = {
  operation: string;
  value?: Value2[];
};

export const entryModesRestrictionSchema: Schema<EntryModesRestriction> = s.object<EntryModesRestriction>({
  operation: s.string(),
  value: s.optional(s.array(s.lazy(() => value2Schema))),
});

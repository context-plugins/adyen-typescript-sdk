import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { value2Schema, type Value2 } from "./value2.js";

export type EntryModesRestriction = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  /**
   * List of point-of-sale entry modes.
   *
   * Possible values: **barcode**, **chip**, **cof**, **contactless**, **magstripe**, **manual**,
   * **ocr**, **server**.
   */
  value?: Value2[];
};

export const entryModesRestrictionSchema: Schema<EntryModesRestriction> = s.object<EntryModesRestriction>({
  operation: s.string(),
  value: s.optional(s.array(s.lazy(() => value2Schema))),
});

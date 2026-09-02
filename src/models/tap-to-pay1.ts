import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TapToPay1 = {
  merchantDisplayName?: string;
};

export const tapToPay1Schema: Schema<TapToPay1> = s.object<TapToPay1>({
  merchantDisplayName: s.optional(s.string()),
});

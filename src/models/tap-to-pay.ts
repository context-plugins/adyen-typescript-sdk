import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TapToPay = {
  merchantDisplayName?: string;
};

export const tapToPaySchema: Schema<TapToPay> = s.object<TapToPay>({
  merchantDisplayName: s.optional(s.string()),
});

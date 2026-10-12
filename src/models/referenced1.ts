import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Settings for referenced refunds. */
export type Referenced1 = {
  /** Indicates whether referenced refunds are enabled on the standalone terminal. */
  enableStandaloneRefunds?: boolean;
};

export const referenced1Schema: Schema<Referenced1> = s.object<Referenced1>({
  enableStandaloneRefunds: s.optional(s.boolean()),
});

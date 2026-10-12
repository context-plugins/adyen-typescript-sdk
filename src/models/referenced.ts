import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Referenced = {
  /** Indicates whether referenced refunds are enabled on the standalone terminal. */
  enableStandaloneRefunds?: boolean;
};

export const referencedSchema: Schema<Referenced> = s.object<Referenced>({
  enableStandaloneRefunds: s.optional(s.boolean()),
});

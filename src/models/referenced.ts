import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Referenced = {
  enableStandaloneRefunds?: boolean;
};

export const referencedSchema: Schema<Referenced> = s.object<Referenced>({
  enableStandaloneRefunds: s.optional(s.boolean()),
});

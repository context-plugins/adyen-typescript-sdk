import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Referenced1 = {
  enableStandaloneRefunds?: boolean;
};

export const referenced1Schema: Schema<Referenced1> = s.object<Referenced1>({
  enableStandaloneRefunds: s.optional(s.boolean()),
});

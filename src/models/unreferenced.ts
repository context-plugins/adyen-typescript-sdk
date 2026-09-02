import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Unreferenced = {
  enableUnreferencedRefunds?: boolean;
};

export const unreferencedSchema: Schema<Unreferenced> = s.object<Unreferenced>({
  enableUnreferencedRefunds: s.optional(s.boolean()),
});

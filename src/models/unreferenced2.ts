import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Unreferenced2 = {
  enableUnreferencedRefunds?: boolean;
};

export const unreferenced2Schema: Schema<Unreferenced2> = s.object<Unreferenced2>({
  enableUnreferencedRefunds: s.optional(s.boolean()),
});

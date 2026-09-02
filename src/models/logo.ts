import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Logo = {
  data?: string;
};

export const logoSchema: Schema<Logo> = s.object<Logo>({
  data: s.optional(s.string()),
});

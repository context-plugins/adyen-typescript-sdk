import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Logo = {
  /**
   * The image file, converted to a Base64-encoded string, of the logo to be shown on the terminal.
   */
  data?: string;
};

export const logoSchema: Schema<Logo> = s.object<Logo>({
  data: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Generates a new API key. When you generate a new one, the existing key remains valid for 24
 * hours.
 */
export type LinksElement3 = {
  href?: string;
};

export const linksElement3Schema: Schema<LinksElement3> = s.object<LinksElement3>({
  href: s.optional(s.string()),
});

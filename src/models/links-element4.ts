import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Generates a new client key, used to authenticate client-side requests. When you generate a new
 * one, the existing key remains valid for 24 hours.
 */
export type LinksElement4 = {
  href?: string;
};

export const linksElement4Schema: Schema<LinksElement4> = s.object<LinksElement4>({
  href: s.optional(s.string()),
});

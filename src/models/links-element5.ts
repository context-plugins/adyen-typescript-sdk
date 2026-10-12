import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The merchant account that the API credential is linked to. Only present for merchant-level API
 * credentials.
 */
export type LinksElement5 = {
  href?: string;
};

export const linksElement5Schema: Schema<LinksElement5> = s.object<LinksElement5>({
  href: s.optional(s.string()),
});

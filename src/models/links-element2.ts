import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Company account that the API credential is linked to. Only present for company-level webhooks.
 */
export type LinksElement2 = {
  href?: string;
};

export const linksElement2Schema: Schema<LinksElement2> = s.object<LinksElement2>({
  href: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The company account that the webhook is configured for. Only present for company-level webhooks.
 */
export type LinksElement15 = {
  href?: string;
};

export const linksElement15Schema: Schema<LinksElement15> = s.object<LinksElement15>({
  href: s.optional(s.string()),
});

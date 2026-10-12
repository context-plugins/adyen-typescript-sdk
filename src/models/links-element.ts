import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The link to the first page of the list., The link to the last page of the list., The link to the
 * next page of the list., The link to the previous page of the list., The link to the list page you
 * are currently viewing., Contains a link to the previous page., Contains a link to the next page.
 */
export type LinksElement = {
  href?: string;
};

export const linksElementSchema: Schema<LinksElement> = s.object<LinksElement>({
  href: s.optional(s.string()),
});

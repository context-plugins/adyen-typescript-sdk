import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinksElement = {
  href?: string;
};

export const linksElementSchema: Schema<LinksElement> = s.object<LinksElement>({
  href: s.optional(s.string()),
});

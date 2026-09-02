import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinksElement2 = {
  href?: string;
};

export const linksElement2Schema: Schema<LinksElement2> = s.object<LinksElement2>({
  href: s.optional(s.string()),
});

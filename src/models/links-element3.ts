import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinksElement3 = {
  href?: string;
};

export const linksElement3Schema: Schema<LinksElement3> = s.object<LinksElement3>({
  href: s.optional(s.string()),
});

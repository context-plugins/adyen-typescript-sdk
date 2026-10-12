import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linksElementSchema, type LinksElement } from "./links-element.js";

/** Contains links to the next and previous page whenever applicable. */
export type Links21 = {
  /** Contains a link to the next page. */
  next?: LinksElement;
  /** Contains a link to the previous page. */
  prev?: LinksElement;
};

export const links21Schema: Schema<Links21> = s.object<Links21>({
  next: s.optional(s.lazy(() => linksElementSchema)),
  prev: s.optional(s.lazy(() => linksElementSchema)),
});

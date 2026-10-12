import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linksElementSchema, type LinksElement } from "./links-element.js";

export type Link = {
  /** The link to the first page of the list. */
  first?: LinksElement;
  /** The link to the last page of the list. */
  last?: LinksElement;
  /** The link to the next page of the list. */
  next?: LinksElement;
  /** The link to the previous page of the list. */
  previous?: LinksElement;
  /** The link to the list page you are currently viewing. */
  self?: LinksElement;
};

export const linkSchema: Schema<Link> = s.object<Link>({
  first: s.optional(s.lazy(() => linksElementSchema)),
  last: s.optional(s.lazy(() => linksElementSchema)),
  next: s.optional(s.lazy(() => linksElementSchema)),
  previous: s.optional(s.lazy(() => linksElementSchema)),
  self: s.optional(s.lazy(() => linksElementSchema)),
});

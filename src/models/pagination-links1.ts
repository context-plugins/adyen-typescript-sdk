import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linksElement10Schema, type LinksElement10 } from "./links-element10.js";
import { linksElement11Schema, type LinksElement11 } from "./links-element11.js";
import { linksElement12Schema, type LinksElement12 } from "./links-element12.js";
import { linksElement13Schema, type LinksElement13 } from "./links-element13.js";
import { linksElement9Schema, type LinksElement9 } from "./links-element9.js";

/** Pagination references. */
export type PaginationLinks1 = {
  /** The first page. */
  first: LinksElement9;
  /** The last page. */
  last: LinksElement10;
  /** The next page. Only present if there is a next page. */
  next?: LinksElement11;
  /** The previous page. Only present if there is a previous page. */
  prev?: LinksElement12;
  /** The current page. */
  self: LinksElement13;
};

export const paginationLinks1Schema: Schema<PaginationLinks1> = s.object<PaginationLinks1>({
  first: linksElement9Schema,
  last: linksElement10Schema,
  next: s.optional(s.lazy(() => linksElement11Schema)),
  prev: s.optional(s.lazy(() => linksElement12Schema)),
  self: linksElement13Schema,
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linksElement10Schema, type LinksElement10 } from "./links-element10.js";
import { linksElement11Schema, type LinksElement11 } from "./links-element11.js";
import { linksElement12Schema, type LinksElement12 } from "./links-element12.js";
import { linksElement13Schema, type LinksElement13 } from "./links-element13.js";
import { linksElement9Schema, type LinksElement9 } from "./links-element9.js";

export type PaginationLinks = {
  first: LinksElement9;
  last: LinksElement10;
  next?: LinksElement11;
  prev?: LinksElement12;
  self: LinksElement13;
};

export const paginationLinksSchema: Schema<PaginationLinks> = s.object<PaginationLinks>({
  first: linksElement9Schema,
  last: linksElement10Schema,
  next: s.optional(s.lazy(() => linksElement11Schema)),
  prev: s.optional(s.lazy(() => linksElement12Schema)),
  self: linksElement13Schema,
});

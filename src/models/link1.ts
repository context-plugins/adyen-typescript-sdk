import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linksElementSchema, type LinksElement } from "./links-element.js";

export type Link1 = {
  first?: LinksElement;
  last?: LinksElement;
  next?: LinksElement;
  previous?: LinksElement;
  self?: LinksElement;
};

export const link1Schema: Schema<Link1> = s.object<Link1>({
  first: s.optional(s.lazy(() => linksElementSchema)),
  last: s.optional(s.lazy(() => linksElementSchema)),
  next: s.optional(s.lazy(() => linksElementSchema)),
  previous: s.optional(s.lazy(() => linksElementSchema)),
  self: s.optional(s.lazy(() => linksElementSchema)),
});

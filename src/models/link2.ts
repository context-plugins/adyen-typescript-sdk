import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linksElementSchema, type LinksElement } from "./links-element.js";

export type Link2 = {
  first?: LinksElement;
  last?: LinksElement;
  next?: LinksElement;
  previous?: LinksElement;
  self?: LinksElement;
};

export const link2Schema: Schema<Link2> = s.object<Link2>({
  first: s.optional(s.lazy(() => linksElementSchema)),
  last: s.optional(s.lazy(() => linksElementSchema)),
  next: s.optional(s.lazy(() => linksElementSchema)),
  previous: s.optional(s.lazy(() => linksElementSchema)),
  self: s.optional(s.lazy(() => linksElementSchema)),
});

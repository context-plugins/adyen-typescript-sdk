import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linksElementSchema, type LinksElement } from "./links-element.js";

export type Links3 = {
  next?: LinksElement;
  prev?: LinksElement;
};

export const links3Schema: Schema<Links3> = s.object<Links3>({
  next: s.optional(s.lazy(() => linksElementSchema)),
  prev: s.optional(s.lazy(() => linksElementSchema)),
});

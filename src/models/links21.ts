import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linksElementSchema, type LinksElement } from "./links-element.js";

export type Links21 = {
  next?: LinksElement;
  prev?: LinksElement;
};

export const links21Schema: Schema<Links21> = s.object<Links21>({
  next: s.optional(s.lazy(() => linksElementSchema)),
  prev: s.optional(s.lazy(() => linksElementSchema)),
});

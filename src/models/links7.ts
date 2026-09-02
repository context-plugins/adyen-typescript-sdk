import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linksElement6Schema, type LinksElement6 } from "./links-element6.js";

export type Links7 = {
  self: LinksElement6;
};

export const links7Schema: Schema<Links7> = s.object<Links7>({
  self: linksElement6Schema,
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linksElement6Schema, type LinksElement6 } from "./links-element6.js";

export type Links1 = {
  self: LinksElement6;
};

export const links1Schema: Schema<Links1> = s.object<Links1>({
  self: linksElement6Schema,
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linksElement6Schema, type LinksElement6 } from "./links-element6.js";

export type Links = {
  self: LinksElement6;
};

export const linksSchema: Schema<Links> = s.object<Links>({
  self: linksElement6Schema,
});

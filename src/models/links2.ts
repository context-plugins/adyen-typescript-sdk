import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linksElement6Schema, type LinksElement6 } from "./links-element6.js";

export type Links2 = {
  self: LinksElement6;
};

export const links2Schema: Schema<Links2> = s.object<Links2>({
  self: linksElement6Schema,
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contentTypeSchema, type ContentType } from "./content-type.js";

export type GetTaxFormResponse1 = {
  content: string;
  contentType?: ContentType;
};

export const getTaxFormResponse1Schema: Schema<GetTaxFormResponse1> = s.object<GetTaxFormResponse1>({
  content: s.string(),
  contentType: s.optional(s.lazy(() => contentTypeSchema)),
});

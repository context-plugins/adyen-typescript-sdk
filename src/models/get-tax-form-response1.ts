import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contentTypeSchema, type ContentType } from "./content-type.js";

export type GetTaxFormResponse1 = {
  /** The content of the tax form in Base64 format. */
  content: string;
  /**
   * The content type of the tax form.
   *
   * Possible values:
   * * **application/pdf**
   */
  contentType?: ContentType;
};

export const getTaxFormResponse1Schema: Schema<GetTaxFormResponse1> = s.object<GetTaxFormResponse1>({
  content: s.string(),
  contentType: s.optional(s.lazy(() => contentTypeSchema)),
});

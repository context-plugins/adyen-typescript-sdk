import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The content type of the tax form.
 *
 * Possible values:
 * * **application/pdf**
 */
export const ContentType = {
  ApplicationPdf: "application/pdf",
} as const;
export type ContentType = (typeof ContentType)[keyof typeof ContentType] | (string & {});

export const contentTypeSchema: EnumSchema<ContentType> = s.enumOf<ContentType>(ContentType);

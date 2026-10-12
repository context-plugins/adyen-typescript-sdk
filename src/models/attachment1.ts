import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Object that contains the document. */
export type Attachment1 = {
  /** The document in Base64-encoded string format. */
  content: string;
  /**
   * The file format.
   *
   * Possible values: **application/pdf**, **image/jpg**, **image/jpeg**, **image/png**.
   *
   * @deprecated
   */
  contentType?: string;
  /**
   * The name of the file including the file extension.
   *
   * @deprecated
   */
  filename?: string;
  /** The name of the file including the file extension. */
  pageName?: string;
  /**
   * Specifies which side of the ID card is uploaded.
   *
   * * If the `type` is **driversLicense** or **identityCard**, you must set this to **front** or
   *   **back** and include both sides in the same API request.
   *
   * * For any other types, when this is omitted, we infer the page number based on the order of
   *   attachments.
   */
  pageType?: string;
};

export const attachment1Schema: Schema<Attachment1> = s.object<Attachment1>({
  content: s.string(),
  contentType: s.optional(s.string()),
  filename: s.optional(s.string()),
  pageName: s.optional(s.string()),
  pageType: s.optional(s.string()),
});

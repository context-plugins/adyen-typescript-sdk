import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type File = {
  /** The certificate content converted to a Base64-encoded string. */
  data: string;
  /** The name of the certificate. Must be unique across Wi-Fi profiles. */
  name: string;
};

export const fileSchema: Schema<File> = s.object<File>({
  data: s.string(),
  name: s.string(),
});

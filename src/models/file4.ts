import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** For `eap` **tls**. The EAP intermediate certificate. */
export type File4 = {
  /** The certificate content converted to a Base64-encoded string. */
  data: string;
  /** The name of the certificate. Must be unique across Wi-Fi profiles. */
  name: string;
};

export const file4Schema: Schema<File4> = s.object<File4>({
  data: s.string(),
  name: s.string(),
});

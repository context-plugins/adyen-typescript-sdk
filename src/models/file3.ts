import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * For `eap` **tls**. The RSA private key for the client. Include the lines BEGIN RSA PRIVATE KEY
 * and END RSA PRIVATE KEY.
 */
export type File3 = {
  /** The certificate content converted to a Base64-encoded string. */
  data: string;
  /** The name of the certificate. Must be unique across Wi-Fi profiles. */
  name: string;
};

export const file3Schema: Schema<File3> = s.object<File3>({
  data: s.string(),
  name: s.string(),
});

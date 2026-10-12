import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * For `eap` **tls**. The certificate chain for the terminals. All terminals in the same network
 * will use the same EAP client certificate.
 */
export type File2 = {
  /** The certificate content converted to a Base64-encoded string. */
  data: string;
  /** The name of the certificate. Must be unique across Wi-Fi profiles. */
  name: string;
};

export const file2Schema: Schema<File2> = s.object<File2>({
  data: s.string(),
  name: s.string(),
});

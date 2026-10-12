import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * For `authType` **wpa-eap** or **wpa2-eap**. The root certificate from the CA that signed the
 * certificate of the RADIUS server that is part of your wireless network.
 */
export type File1 = {
  /** The certificate content converted to a Base64-encoded string. */
  data: string;
  /** The name of the certificate. Must be unique across Wi-Fi profiles. */
  name: string;
};

export const file1Schema: Schema<File1> = s.object<File1>({
  data: s.string(),
  name: s.string(),
});

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * SSL version to access the public webhook URL specified in the `url` field. Possible values:
 * * **TLSv1.3**
 * * **TLSv1.2**
 * * **HTTP** - Only allowed on Test environment.
 *
 * If not specified, the webhook will use `sslVersion`: **TLSv1.2**.
 */
export const EncryptionProtocol = {
  Http: "HTTP",
  TlSv12: "TLSv1.2",
  TlSv13: "TLSv1.3",
} as const;
export type EncryptionProtocol = (typeof EncryptionProtocol)[keyof typeof EncryptionProtocol] | (string & {});

export const encryptionProtocolSchema: EnumSchema<EncryptionProtocol> =
  s.enumOf<EncryptionProtocol>(EncryptionProtocol);

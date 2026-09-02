import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EncryptionProtocol = {
  Http: "HTTP",
  TlSv12: "TLSv1.2",
  TlSv13: "TLSv1.3",
} as const;
export type EncryptionProtocol = (typeof EncryptionProtocol)[keyof typeof EncryptionProtocol] | (string & {});

export const encryptionProtocolSchema: EnumSchema<EncryptionProtocol> =
  s.enumOf<EncryptionProtocol>(EncryptionProtocol);

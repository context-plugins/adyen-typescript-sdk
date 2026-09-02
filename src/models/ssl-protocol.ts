import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SslProtocol = {
  TlSv12: "TLSv12",
  TlSv13: "TLSv13",
} as const;
export type SslProtocol = (typeof SslProtocol)[keyof typeof SslProtocol] | (string & {});

export const sslProtocolSchema: EnumSchema<SslProtocol> = s.enumOf<SslProtocol>(SslProtocol);

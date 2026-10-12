import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The SSL protocol employed by the endpoint. >Permitted values: `TLSv12`, `TLSv13`. */
export const SslProtocol = {
  TlSv12: "TLSv12",
  TlSv13: "TLSv13",
} as const;
export type SslProtocol = (typeof SslProtocol)[keyof typeof SslProtocol] | (string & {});

export const sslProtocolSchema: EnumSchema<SslProtocol> = s.enumOf<SslProtocol>(SslProtocol);

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalConnectivityEthernet = {
  ipAddress?: string;
  linkNegotiation?: string;
  macAddress?: string;
};

export const terminalConnectivityEthernetSchema: Schema<TerminalConnectivityEthernet> =
  s.object<TerminalConnectivityEthernet>({
    ipAddress: s.optional(s.string()),
    linkNegotiation: s.optional(s.string()),
    macAddress: s.optional(s.string()),
  });

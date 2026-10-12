import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalConnectivityEthernet = {
  /** The terminal's ethernet IP address. */
  ipAddress?: string;
  /** The ethernet link negotiation that the terminal uses. */
  linkNegotiation?: string;
  /** The terminal's ethernet MAC address. */
  macAddress?: string;
};

export const terminalConnectivityEthernetSchema: Schema<TerminalConnectivityEthernet> =
  s.object<TerminalConnectivityEthernet>({
    ipAddress: s.optional(s.string()),
    linkNegotiation: s.optional(s.string()),
    macAddress: s.optional(s.string()),
  });

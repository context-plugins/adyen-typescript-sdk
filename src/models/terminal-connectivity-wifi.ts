import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalConnectivityWifi = {
  ipAddress?: string;
  macAddress?: string;
  ssid?: string;
};

export const terminalConnectivityWifiSchema: Schema<TerminalConnectivityWifi> =
  s.object<TerminalConnectivityWifi>({
    ipAddress: s.optional(s.string()),
    macAddress: s.optional(s.string()),
    ssid: s.optional(s.string()),
  });

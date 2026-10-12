import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalConnectivityWifi = {
  /** The terminal's IP address in the Wi-Fi network. */
  ipAddress?: string;
  /** The terminal's MAC address in the Wi-Fi network. */
  macAddress?: string;
  /** The SSID of the Wi-Fi network that the terminal is connected to. */
  ssid?: string;
};

export const terminalConnectivityWifiSchema: Schema<TerminalConnectivityWifi> =
  s.object<TerminalConnectivityWifi>({
    ipAddress: s.optional(s.string()),
    macAddress: s.optional(s.string()),
    ssid: s.optional(s.string()),
  });

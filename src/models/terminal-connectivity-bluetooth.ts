import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalConnectivityBluetooth = {
  /** The terminal's Bluetooth IP address. */
  ipAddress?: string;
  /** The terminal's Bluetooth MAC address. */
  macAddress?: string;
};

export const terminalConnectivityBluetoothSchema: Schema<TerminalConnectivityBluetooth> =
  s.object<TerminalConnectivityBluetooth>({
    ipAddress: s.optional(s.string()),
    macAddress: s.optional(s.string()),
  });

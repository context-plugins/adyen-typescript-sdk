import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalConnectivityBluetooth = {
  ipAddress?: string;
  macAddress?: string;
};

export const terminalConnectivityBluetoothSchema: Schema<TerminalConnectivityBluetooth> =
  s.object<TerminalConnectivityBluetooth>({
    ipAddress: s.optional(s.string()),
    macAddress: s.optional(s.string()),
  });

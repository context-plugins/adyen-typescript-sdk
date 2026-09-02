import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalConnectivityBluetoothSchema,
  type TerminalConnectivityBluetooth,
} from "./terminal-connectivity-bluetooth.js";
import {
  terminalConnectivityCellularSchema,
  type TerminalConnectivityCellular,
} from "./terminal-connectivity-cellular.js";
import {
  terminalConnectivityEthernetSchema,
  type TerminalConnectivityEthernet,
} from "./terminal-connectivity-ethernet.js";
import {
  terminalConnectivityWifiSchema,
  type TerminalConnectivityWifi,
} from "./terminal-connectivity-wifi.js";

export type TerminalConnectivity = {
  bluetooth?: TerminalConnectivityBluetooth;
  cellular?: TerminalConnectivityCellular;
  ethernet?: TerminalConnectivityEthernet;
  wifi?: TerminalConnectivityWifi;
};

export const terminalConnectivitySchema: Schema<TerminalConnectivity> = s.object<TerminalConnectivity>({
  bluetooth: s.optional(s.lazy(() => terminalConnectivityBluetoothSchema)),
  cellular: s.optional(s.lazy(() => terminalConnectivityCellularSchema)),
  ethernet: s.optional(s.lazy(() => terminalConnectivityEthernetSchema)),
  wifi: s.optional(s.lazy(() => terminalConnectivityWifiSchema)),
});

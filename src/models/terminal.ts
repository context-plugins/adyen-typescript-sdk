import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { installedApKsSchema, type InstalledApKs } from "./installed-ap-ks.js";
import { terminalAssignment2Schema, type TerminalAssignment2 } from "./terminal-assignment2.js";
import { terminalConnectivity2Schema, type TerminalConnectivity2 } from "./terminal-connectivity2.js";

export type Terminal = {
  assignment?: TerminalAssignment2;
  cloudDeviceApiEndpoint?: string;
  connectivity?: TerminalConnectivity2;
  countryCode?: string;
  firmwareVersion?: string;
  id?: string;
  installedApKs?: InstalledApKs[];
  lastActivityAt?: Date;
  lastTransactionAt?: Date;
  model?: string;
  restartLocalTime?: string;
  serialNumber?: string;
};

export const terminalSchema: Schema<Terminal> = s.object<Terminal>({
  assignment: s.optional(s.lazy(() => terminalAssignment2Schema)),
  cloudDeviceApiEndpoint: s.optional(s.string()),
  connectivity: s.optional(s.lazy(() => terminalConnectivity2Schema)),
  countryCode: s.optional(s.string()),
  firmwareVersion: s.optional(s.string()),
  id: s.optional(s.string()),
  installedApKs: s.optional(s.array(s.lazy(() => installedApKsSchema))),
  lastActivityAt: s.optional(s.dateTime()),
  lastTransactionAt: s.optional(s.dateTime()),
  model: s.optional(s.string()),
  restartLocalTime: s.optional(s.string()),
  serialNumber: s.optional(s.string()),
  _keysMap: {
    installedApKs: "installedAPKs",
  },
});

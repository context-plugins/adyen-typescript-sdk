import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { installedApKsSchema, type InstalledApKs } from "./installed-ap-ks.js";
import { terminalAssignment2Schema, type TerminalAssignment2 } from "./terminal-assignment2.js";
import { terminalConnectivity2Schema, type TerminalConnectivity2 } from "./terminal-connectivity2.js";

export type Terminal = {
  /**
   * Indicates the account level to which the terminal is assigned, the [assignment
   * status](https://docs.adyen.com/point-of-sale/automating-terminal-management/assign-terminals-api),
   * and where the terminals is in the process of being reassigned to.
   */
  assignment?: TerminalAssignment2;
  /**
   * The [regional base
   * URL](https://docs.adyen.com/api-explorer/terminal-api/1/overview#endpoints-for-cloud-communications)
   * to use for sending Terminal API requests when using cloud communications.
   */
  cloudDeviceApiEndpoint?: string;
  /** Information about bluetooth, cellular, ethernet and wifi connectivity for the terminal. */
  connectivity?: TerminalConnectivity2;
  /** The country code of the country where the terminal is located. */
  countryCode?: string;
  /** The software release currently in use on the terminal. */
  firmwareVersion?: string;
  /** The unique identifier of the terminal. */
  id?: string;
  /** A list of Android apps installed on the terminal. */
  installedApKs?: InstalledApKs[];
  /**
   * Date and time of the last activity on the terminal. Not included when the last activity was
   * more than 14 days ago.
   */
  lastActivityAt?: Date;
  /**
   * Date and time of the last transaction on the terminal. Not included when the last transaction
   * was more than 14 days ago.
   */
  lastTransactionAt?: Date;
  /** The model name of the terminal. */
  model?: string;
  /** The exact time of the terminal reboot, in the timezone of the terminal in **HH:mm** format. */
  restartLocalTime?: string;
  /** The serial number of the terminal. */
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

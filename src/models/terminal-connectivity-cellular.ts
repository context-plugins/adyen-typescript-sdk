import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status31Schema, type Status31 } from "./status31.js";

export type TerminalConnectivityCellular = {
  /** The integrated circuit card identifier (ICCID) of the primary SIM card in the terminal. */
  iccid?: string;
  /**
   * The integrated circuit card identifier (ICCID) of the secondary SIM card in the terminal,
   * typically used for a [third-party SIM
   * card](https://docs.adyen.com/point-of-sale/design-your-integration/network-and-connectivity/cellular-failover/#using-a-third-party-sim-card).
   */
  iccid2?: string;
  /**
   * On a terminal that supports 3G or 4G connectivity, indicates the status of the primary SIM card
   * in the terminal.
   */
  status?: Status31;
};

export const terminalConnectivityCellularSchema: Schema<TerminalConnectivityCellular> =
  s.object<TerminalConnectivityCellular>({
    iccid: s.optional(s.string()),
    iccid2: s.optional(s.string()),
    status: s.optional(s.lazy(() => status31Schema)),
  });

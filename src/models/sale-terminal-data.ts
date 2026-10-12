import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information related to the software and hardware features of the Sale Terminal. Sent in the Login
 * Request if a Sale Terminal is involved in the login. In other messages, sent when a logical
 * device is out of order (SaleCapabilities) or when other data have changed or were missing in the
 * Login.
 */
export type SaleTerminalData = {
  /**
   * Identification of a group of transactions on a POI Terminal, having the same Sale features.
   * Could be used to group POI for reconciliation or other purpose defined by the Sale System. The
   * default value is assigned by the Login Request.
   */
  totalsGroupId?: string;
};

export const saleTerminalDataSchema: Schema<SaleTerminalData> = s.object<SaleTerminalData>({
  totalsGroupId: s.optional(s.string()),
  _keysMap: {
    totalsGroupId: "TotalsGroupID",
  },
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information related to the software and hardware features of the Sale Terminal. If content is not
 * empty.
 */
export type SaleTerminalData1 = {
  /**
   * Identification of a group of transactions on a POI Terminal, having the same Sale features.
   * Could be used to group POI for reconciliation or other purpose defined by the Sale System. The
   * default value is assigned by the Login Request.
   */
  totalsGroupId?: string;
};

export const saleTerminalData1Schema: Schema<SaleTerminalData1> = s.object<SaleTerminalData1>({
  totalsGroupId: s.optional(s.string()),
  _keysMap: {
    totalsGroupId: "TotalsGroupID",
  },
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SaleTerminalData1 = {
  totalsGroupId?: string;
};

export const saleTerminalData1Schema: Schema<SaleTerminalData1> = s.object<SaleTerminalData1>({
  totalsGroupId: s.optional(s.string()),
  _keysMap: {
    totalsGroupId: "TotalsGroupID",
  },
});

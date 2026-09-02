import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SaleTerminalData2 = {
  totalsGroupId?: string;
};

export const saleTerminalData2Schema: Schema<SaleTerminalData2> = s.object<SaleTerminalData2>({
  totalsGroupId: s.optional(s.string()),
  _keysMap: {
    totalsGroupId: "TotalsGroupID",
  },
});

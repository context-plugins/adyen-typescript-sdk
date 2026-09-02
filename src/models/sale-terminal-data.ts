import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SaleTerminalData = {
  totalsGroupId?: string;
};

export const saleTerminalDataSchema: Schema<SaleTerminalData> = s.object<SaleTerminalData>({
  totalsGroupId: s.optional(s.string()),
  _keysMap: {
    totalsGroupId: "TotalsGroupID",
  },
});

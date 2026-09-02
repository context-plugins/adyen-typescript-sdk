import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TotalFilter = {
  poiid?: string;
  saleId?: string;
  operatorId?: string;
  shiftNumber?: string;
  totalsGroupId?: string;
};

export const totalFilterSchema: Schema<TotalFilter> = s.object<TotalFilter>({
  poiid: s.optional(s.string()),
  saleId: s.optional(s.string()),
  operatorId: s.optional(s.string()),
  shiftNumber: s.optional(s.string()),
  totalsGroupId: s.optional(s.string()),
  _keysMap: {
    poiid: "POIID",
    saleId: "SaleID",
    operatorId: "OperatorID",
    shiftNumber: "ShiftNumber",
    totalsGroupId: "TotalsGroupID",
  },
});

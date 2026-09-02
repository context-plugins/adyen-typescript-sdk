import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TotalFilter2 = {
  poiid?: string;
  saleId?: string;
  operatorId?: string;
  shiftNumber?: string;
  totalsGroupId?: string;
};

export const totalFilter2Schema: Schema<TotalFilter2> = s.object<TotalFilter2>({
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

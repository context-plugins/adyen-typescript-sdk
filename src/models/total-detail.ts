import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TotalDetail = {
  Poiid: "POIID",
  SaleId: "SaleID",
  OperatorId: "OperatorID",
  ShiftNumber: "ShiftNumber",
  TotalsGroupId: "TotalsGroupID",
} as const;
export type TotalDetail = (typeof TotalDetail)[keyof typeof TotalDetail] | (string & {});

export const totalDetailSchema: EnumSchema<TotalDetail> = s.enumOf<TotalDetail>(TotalDetail);

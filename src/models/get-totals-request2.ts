import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { totalDetailSchema, type TotalDetail } from "./total-detail.js";
import { totalFilter2Schema, type TotalFilter2 } from "./total-filter2.js";

export type GetTotalsRequest2 = {
  totalDetails?: TotalDetail[];
  totalFilter?: TotalFilter2;
};

export const getTotalsRequest2Schema: Schema<GetTotalsRequest2> = s.object<GetTotalsRequest2>({
  totalDetails: s.optional(s.array(s.lazy(() => totalDetailSchema))),
  totalFilter: s.optional(s.lazy(() => totalFilter2Schema)),
  _keysMap: {
    totalDetails: "TotalDetails",
    totalFilter: "TotalFilter",
  },
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destination1Schema, type Destination1 } from "./destination1.js";
import { itemDetailLineSchema, type ItemDetailLine } from "./item-detail-line.js";

export type LevelTwoThree2 = {
  customerReferenceNumber?: string;
  destination?: Destination1;
  dutyAmount?: number;
  freightAmount?: number;
  itemDetailLines?: ItemDetailLine[];
  orderDate?: string;
  shipFromPostalCode?: string;
  totalTaxAmount?: number;
};

export const levelTwoThree2Schema: Schema<LevelTwoThree2> = s.object<LevelTwoThree2>({
  customerReferenceNumber: s.optional(s.string()),
  destination: s.optional(s.lazy(() => destination1Schema)),
  dutyAmount: s.optional(s.number()),
  freightAmount: s.optional(s.number()),
  itemDetailLines: s.optional(s.array(s.lazy(() => itemDetailLineSchema))),
  orderDate: s.optional(s.dateOnly()),
  shipFromPostalCode: s.optional(s.string()),
  totalTaxAmount: s.optional(s.number()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { folio2Schema, type Folio2 } from "./folio2.js";
import { lodgingChargeTypeSchema, type LodgingChargeType } from "./lodging-charge-type.js";
import { roomSchema, type Room } from "./room.js";

export type Lodging2 = {
  checkInDate?: string;
  checkOutDate?: string;
  customerServicePhoneNumber?: string;
  fireSafetyCompliance?: boolean;
  folio?: Folio2;
  foodBeverageCharges?: number;
  lodgingChargeType?: LodgingChargeType;
  noShow?: boolean;
  prepaidExpenses?: number;
  propertyPhoneNumber?: string;
  renterName?: string;
  rooms?: Room[];
  totalRoomTax?: number;
  totalTax?: number;
};

export const lodging2Schema: Schema<Lodging2> = s.object<Lodging2>({
  checkInDate: s.optional(s.dateOnly()),
  checkOutDate: s.optional(s.dateOnly()),
  customerServicePhoneNumber: s.optional(s.string()),
  fireSafetyCompliance: s.optional(s.boolean()),
  folio: s.optional(s.lazy(() => folio2Schema)),
  foodBeverageCharges: s.optional(s.number()),
  lodgingChargeType: s.optional(s.lazy(() => lodgingChargeTypeSchema)),
  noShow: s.optional(s.boolean()),
  prepaidExpenses: s.optional(s.number()),
  propertyPhoneNumber: s.optional(s.string()),
  renterName: s.optional(s.string()),
  rooms: s.optional(s.array(s.lazy(() => roomSchema))),
  totalRoomTax: s.optional(s.number()),
  totalTax: s.optional(s.number()),
});

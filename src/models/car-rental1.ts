import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pickupInfoSchema, type PickupInfo } from "./pickup-info.js";
import { rateTypeSchema, type RateType } from "./rate-type.js";
import { rentalSurchargesSchema, type RentalSurcharges } from "./rental-surcharges.js";
import { returnInfoSchema, type ReturnInfo } from "./return-info.js";

export type CarRental1 = {
  customerServicePhoneNumber?: string;
  noShow?: boolean;
  pickupInfo?: PickupInfo;
  rateType?: RateType;
  rentalAgreementNumber?: string;
  rentalClassId?: string;
  rentalDays?: number;
  rentalRate?: number;
  rentalSurcharges?: RentalSurcharges;
  renterName: string;
  returnInfo?: ReturnInfo;
  taxExempt?: boolean;
};

export const carRental1Schema: Schema<CarRental1> = s.object<CarRental1>({
  customerServicePhoneNumber: s.optional(s.string()),
  noShow: s.optional(s.boolean()),
  pickupInfo: s.optional(s.lazy(() => pickupInfoSchema)),
  rateType: s.optional(s.lazy(() => rateTypeSchema)),
  rentalAgreementNumber: s.optional(s.string()),
  rentalClassId: s.optional(s.string()),
  rentalDays: s.optional(s.number()),
  rentalRate: s.optional(s.number()),
  rentalSurcharges: s.optional(s.lazy(() => rentalSurchargesSchema)),
  renterName: s.string(),
  returnInfo: s.optional(s.lazy(() => returnInfoSchema)),
  taxExempt: s.optional(s.boolean()),
});

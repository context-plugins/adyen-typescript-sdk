import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Passenger = {
  dateOfBirth?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  travellerType?: string;
};

export const passengerSchema: Schema<Passenger> = s.object<Passenger>({
  dateOfBirth: s.optional(s.dateOnly()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
  travellerType: s.optional(s.string()),
});

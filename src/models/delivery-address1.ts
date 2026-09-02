import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeliveryAddress1 = {
  city: string;
  country: string;
  firstName?: string;
  houseNumberOrName: string;
  lastName?: string;
  postalCode: string;
  stateOrProvince?: string;
  street: string;
};

export const deliveryAddress1Schema: Schema<DeliveryAddress1> = s.object<DeliveryAddress1>({
  city: s.string(),
  country: s.string(),
  firstName: s.optional(s.string()),
  houseNumberOrName: s.string(),
  lastName: s.optional(s.string()),
  postalCode: s.string(),
  stateOrProvince: s.optional(s.string()),
  street: s.string(),
});

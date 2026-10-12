import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address21Schema, type Address21 } from "./address21.js";
import { contact1Schema, type Contact1 } from "./contact1.js";

/** The details of the location where the order is shipped to. */
export type ShippingLocation1 = {
  /** The address details of the shipping location. */
  address?: Address21;
  /** The contact details for the shipping location. */
  contact?: Contact1;
  /**
   * The unique identifier of the shipping location, for use as `shippingLocationId` when creating
   * an order.
   */
  id?: string;
  /** The unique name of the shipping location. */
  name?: string;
};

export const shippingLocation1Schema: Schema<ShippingLocation1> = s.object<ShippingLocation1>({
  address: s.optional(s.lazy(() => address21Schema)),
  contact: s.optional(s.lazy(() => contact1Schema)),
  id: s.optional(s.string()),
  name: s.optional(s.string()),
});

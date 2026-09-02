import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address21Schema, type Address21 } from "./address21.js";
import { contact1Schema, type Contact1 } from "./contact1.js";

export type ShippingLocation = {
  address?: Address21;
  contact?: Contact1;
  id?: string;
  name?: string;
};

export const shippingLocationSchema: Schema<ShippingLocation> = s.object<ShippingLocation>({
  address: s.optional(s.lazy(() => address21Schema)),
  contact: s.optional(s.lazy(() => contact1Schema)),
  id: s.optional(s.string()),
  name: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shippingLocationSchema, type ShippingLocation } from "./shipping-location.js";

export type ShippingLocationsResponse = {
  /** Physical locations where orders can be shipped to. */
  data?: ShippingLocation[];
};

export const shippingLocationsResponseSchema: Schema<ShippingLocationsResponse> =
  s.object<ShippingLocationsResponse>({
    data: s.optional(s.array(s.lazy(() => shippingLocationSchema))),
  });

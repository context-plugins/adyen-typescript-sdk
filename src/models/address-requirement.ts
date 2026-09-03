import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { requiredAddressFieldSchema, type RequiredAddressField } from "./required-address-field.js";

export type AddressRequirement = {
  description?: string;
  requiredAddressFields?: RequiredAddressField[];
  type: "addressRequirement";
};

export const addressRequirementSchema: Schema<AddressRequirement> = s.object<AddressRequirement>({
  description: s.optional(s.string()),
  requiredAddressFields: s.optional(s.array(s.lazy(() => requiredAddressFieldSchema))),
  type: s.literal("addressRequirement"),
});

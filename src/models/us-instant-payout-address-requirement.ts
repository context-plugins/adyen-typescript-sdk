import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type411Schema, type Type411 } from "./type411.js";

export type UsInstantPayoutAddressRequirement = {
  description?: string;
  type: Type411;
};

export const usInstantPayoutAddressRequirementSchema: Schema<UsInstantPayoutAddressRequirement> =
  s.object<UsInstantPayoutAddressRequirement>({
    description: s.optional(s.string()),
    type: type411Schema,
  });

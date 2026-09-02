import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TravelAgency = {
  code?: string;
  name?: string;
};

export const travelAgencySchema: Schema<TravelAgency> = s.object<TravelAgency>({
  code: s.optional(s.string()),
  name: s.optional(s.string()),
});

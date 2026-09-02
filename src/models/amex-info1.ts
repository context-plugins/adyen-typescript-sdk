import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceLevelSchema, type ServiceLevel } from "./service-level.js";

export type AmexInfo1 = {
  midNumber?: string;
  reuseMidNumber?: boolean;
  serviceLevel: ServiceLevel;
};

export const amexInfo1Schema: Schema<AmexInfo1> = s.object<AmexInfo1>({
  midNumber: s.optional(s.string()),
  reuseMidNumber: s.optional(s.boolean()),
  serviceLevel: serviceLevelSchema,
});

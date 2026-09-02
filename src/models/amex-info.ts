import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceLevelSchema, type ServiceLevel } from "./service-level.js";

export type AmexInfo = {
  midNumber?: string;
  reuseMidNumber?: boolean;
  serviceLevel: ServiceLevel;
};

export const amexInfoSchema: Schema<AmexInfo> = s.object<AmexInfo>({
  midNumber: s.optional(s.string()),
  reuseMidNumber: s.optional(s.boolean()),
  serviceLevel: serviceLevelSchema,
});

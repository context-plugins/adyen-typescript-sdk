import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SupportingEntityCapability = {
  allowed?: boolean;
  id?: string;
  requested?: boolean;
  verificationStatus?: string;
};

export const supportingEntityCapabilitySchema: Schema<SupportingEntityCapability> =
  s.object<SupportingEntityCapability>({
    allowed: s.optional(s.boolean()),
    id: s.optional(s.string()),
    requested: s.optional(s.boolean()),
    verificationStatus: s.optional(s.string()),
  });

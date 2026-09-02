import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AssociationStatus = {
  PendingApproval: "pendingApproval",
  Active: "active",
} as const;
export type AssociationStatus = (typeof AssociationStatus)[keyof typeof AssociationStatus] | (string & {});

export const associationStatusSchema: EnumSchema<AssociationStatus> =
  s.enumOf<AssociationStatus>(AssociationStatus);

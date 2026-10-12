import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the association.
 *
 * Possible values: **active** or **pendingApproval**.
 */
export const AssociationStatus1 = {
  PendingApproval: "pendingApproval",
  Active: "active",
} as const;
export type AssociationStatus1 = (typeof AssociationStatus1)[keyof typeof AssociationStatus1] | (string & {});

export const associationStatus1Schema: EnumSchema<AssociationStatus1> =
  s.enumOf<AssociationStatus1>(AssociationStatus1);

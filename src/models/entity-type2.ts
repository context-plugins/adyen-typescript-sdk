import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the entity the payout is processed for.
 *
 * Allowed values:
 * * NaturalPerson
 * * Company > This field is required to update the existing `entityType` that is associated with
 *   this recurring contract.
 */
export const EntityType2 = {
  NaturalPerson: "NaturalPerson",
  Company: "Company",
} as const;
export type EntityType2 = (typeof EntityType2)[keyof typeof EntityType2] | (string & {});

export const entityType2Schema: EnumSchema<EntityType2> = s.enumOf<EntityType2>(EntityType2);

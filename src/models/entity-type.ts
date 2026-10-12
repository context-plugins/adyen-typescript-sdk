import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the entity the payment is processed for. */
export const EntityType = {
  NaturalPerson: "NaturalPerson",
  CompanyName: "CompanyName",
} as const;
export type EntityType = (typeof EntityType)[keyof typeof EntityType] | (string & {});

export const entityTypeSchema: EnumSchema<EntityType> = s.enumOf<EntityType>(EntityType);

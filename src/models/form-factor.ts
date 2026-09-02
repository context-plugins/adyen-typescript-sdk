import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FormFactor = {
  Physical: "physical",
  Unknown: "unknown",
  Virtual: "virtual",
} as const;
export type FormFactor = (typeof FormFactor)[keyof typeof FormFactor] | (string & {});

export const formFactorSchema: EnumSchema<FormFactor> = s.enumOf<FormFactor>(FormFactor);

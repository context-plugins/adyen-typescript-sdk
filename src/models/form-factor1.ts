import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FormFactor1 = {
  Physical: "physical",
  Unknown: "unknown",
  Virtual: "virtual",
} as const;
export type FormFactor1 = (typeof FormFactor1)[keyof typeof FormFactor1] | (string & {});

export const formFactor1Schema: EnumSchema<FormFactor1> = s.enumOf<FormFactor1>(FormFactor1);

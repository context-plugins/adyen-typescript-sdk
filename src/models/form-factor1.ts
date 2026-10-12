import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The form factor of the card. Possible values: **virtual**, **physical**. */
export const FormFactor1 = {
  Physical: "physical",
  Unknown: "unknown",
  Virtual: "virtual",
} as const;
export type FormFactor1 = (typeof FormFactor1)[keyof typeof FormFactor1] | (string & {});

export const formFactor1Schema: EnumSchema<FormFactor1> = s.enumOf<FormFactor1>(FormFactor1);

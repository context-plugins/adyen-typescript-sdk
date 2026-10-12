import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Business accounts with a `formFactor` value of **physical** are business accounts issued under
 * the central bank of that country. The default value is **physical** for NL, US, and UK business
 * accounts.
 *
 * Adyen creates a local IBAN for business accounts when the `formFactor` value is set to
 * **virtual**. The local IBANs that are supported are for DE and FR, which reference a physical NL
 * account, with funds being routed through the central bank of NL.
 */
export const FormFactor = {
  Physical: "physical",
  Unknown: "unknown",
  Virtual: "virtual",
} as const;
export type FormFactor = (typeof FormFactor)[keyof typeof FormFactor] | (string & {});

export const formFactorSchema: EnumSchema<FormFactor> = s.enumOf<FormFactor>(FormFactor);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RequiredAddressField = {
  City: "city",
  Country: "country",
  Line1: "line1",
  PostalCode: "postalCode",
  StateOrProvince: "stateOrProvince",
} as const;
export type RequiredAddressField =
  | (typeof RequiredAddressField)[keyof typeof RequiredAddressField]
  | (string & {});

export const requiredAddressFieldSchema: EnumSchema<RequiredAddressField> =
  s.enumOf<RequiredAddressField>(RequiredAddressField);

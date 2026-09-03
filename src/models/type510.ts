import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type510 = {
  AuBsbCode: "auBsbCode",
  CaRoutingNumber: "caRoutingNumber",
  GbSortCode: "gbSortCode",
  UsRoutingNumber: "usRoutingNumber",
} as const;
export type Type510 = (typeof Type510)[keyof typeof Type510] | (string & {});

export const type510Schema: EnumSchema<Type510> = s.enumOf<Type510>(Type510);

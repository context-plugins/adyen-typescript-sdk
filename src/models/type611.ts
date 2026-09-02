import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type611 = {
  AuBsbCode: "auBsbCode",
  CaRoutingNumber: "caRoutingNumber",
  GbSortCode: "gbSortCode",
  UsRoutingNumber: "usRoutingNumber",
} as const;
export type Type611 = (typeof Type611)[keyof typeof Type611] | (string & {});

export const type611Schema: EnumSchema<Type611> = s.enumOf<Type611>(Type611);

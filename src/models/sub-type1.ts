import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubType1 = {
  AtmDispute: "atmDispute",
  CancelledGoodsServices: "cancelledGoodsServices",
  CancelledRecurring: "cancelledRecurring",
  CreditNotProcessed: "creditNotProcessed",
  Counterfeit: "counterfeit",
  NotAsDescribed: "notAsDescribed",
} as const;
export type SubType1 = (typeof SubType1)[keyof typeof SubType1] | (string & {});

export const subType1Schema: EnumSchema<SubType1> = s.enumOf<SubType1>(SubType1);

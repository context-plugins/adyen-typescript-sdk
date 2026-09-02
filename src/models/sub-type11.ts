import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubType11 = {
  AtmDispute: "atmDispute",
  CancelledGoodsServices: "cancelledGoodsServices",
  CancelledRecurring: "cancelledRecurring",
  CreditNotProcessed: "creditNotProcessed",
  Counterfeit: "counterfeit",
  NotAsDescribed: "notAsDescribed",
} as const;
export type SubType11 = (typeof SubType11)[keyof typeof SubType11] | (string & {});

export const subType11Schema: EnumSchema<SubType11> = s.enumOf<SubType11>(SubType11);

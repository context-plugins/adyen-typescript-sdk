import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubType2 = {
  AtmDispute: "atmDispute",
  CancelledGoodsServices: "cancelledGoodsServices",
  CancelledRecurring: "cancelledRecurring",
  CreditNotProcessed: "creditNotProcessed",
  Counterfeit: "counterfeit",
  NotAsDescribed: "notAsDescribed",
} as const;
export type SubType2 = (typeof SubType2)[keyof typeof SubType2] | (string & {});

export const subType2Schema: EnumSchema<SubType2> = s.enumOf<SubType2>(SubType2);

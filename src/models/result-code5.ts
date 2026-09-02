import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResultCode5 = {
  Success: "Success",
  Refused: "Refused",
  Error: "Error",
  NotEnoughBalance: "NotEnoughBalance",
} as const;
export type ResultCode5 = (typeof ResultCode5)[keyof typeof ResultCode5] | (string & {});

export const resultCode5Schema: EnumSchema<ResultCode5> = s.enumOf<ResultCode5>(ResultCode5);

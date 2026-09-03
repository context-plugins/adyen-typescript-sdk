import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResultCode3 = {
  Success: "Success",
  Refused: "Refused",
  Error: "Error",
  NotEnoughBalance: "NotEnoughBalance",
} as const;
export type ResultCode3 = (typeof ResultCode3)[keyof typeof ResultCode3] | (string & {});

export const resultCode3Schema: EnumSchema<ResultCode3> = s.enumOf<ResultCode3>(ResultCode3);

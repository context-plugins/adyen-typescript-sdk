import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResultCode = {
  Success: "Success",
  NotEnoughBalance: "NotEnoughBalance",
  Failed: "Failed",
} as const;
export type ResultCode = (typeof ResultCode)[keyof typeof ResultCode] | (string & {});

export const resultCodeSchema: EnumSchema<ResultCode> = s.enumOf<ResultCode>(ResultCode);

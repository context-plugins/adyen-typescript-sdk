import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResultCode4 = {
  Authorised: "Authorised",
  Received: "Received",
  Pending: "Pending",
} as const;
export type ResultCode4 = (typeof ResultCode4)[keyof typeof ResultCode4] | (string & {});

export const resultCode4Schema: EnumSchema<ResultCode4> = s.enumOf<ResultCode4>(ResultCode4);

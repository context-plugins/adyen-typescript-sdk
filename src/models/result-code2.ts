import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResultCode2 = {
  Authorised: "Authorised",
  Received: "Received",
  Pending: "Pending",
} as const;
export type ResultCode2 = (typeof ResultCode2)[keyof typeof ResultCode2] | (string & {});

export const resultCode2Schema: EnumSchema<ResultCode2> = s.enumOf<ResultCode2>(ResultCode2);

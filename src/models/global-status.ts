import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GlobalStatus = {
  Ok: "OK",
  Busy: "Busy",
  Maintenance: "Maintenance",
  Unreachable: "Unreachable",
} as const;
export type GlobalStatus = (typeof GlobalStatus)[keyof typeof GlobalStatus] | (string & {});

export const globalStatusSchema: EnumSchema<GlobalStatus> = s.enumOf<GlobalStatus>(GlobalStatus);

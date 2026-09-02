import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Operation = {
  Contains: "contains",
  EndsWith: "endsWith",
  IsEqualTo: "isEqualTo",
  StartsWith: "startsWith",
} as const;
export type Operation = (typeof Operation)[keyof typeof Operation] | (string & {});

export const operationSchema: EnumSchema<Operation> = s.enumOf<Operation>(Operation);

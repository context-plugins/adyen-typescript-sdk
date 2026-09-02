import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DelegatedAuthenticationData1 = {
  sdkOutput: string;
};

export const delegatedAuthenticationData1Schema: Schema<DelegatedAuthenticationData1> =
  s.object<DelegatedAuthenticationData1>({
    sdkOutput: s.string(),
  });

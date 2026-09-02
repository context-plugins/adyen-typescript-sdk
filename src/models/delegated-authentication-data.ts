import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DelegatedAuthenticationData = {
  sdkOutput: string;
};

export const delegatedAuthenticationDataSchema: Schema<DelegatedAuthenticationData> =
  s.object<DelegatedAuthenticationData>({
    sdkOutput: s.string(),
  });

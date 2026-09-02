import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssociationDelegatedAuthenticationData1 = {
  sdkOutput: string;
};

export const associationDelegatedAuthenticationData1Schema: Schema<AssociationDelegatedAuthenticationData1> =
  s.object<AssociationDelegatedAuthenticationData1>({
    sdkOutput: s.string(),
  });

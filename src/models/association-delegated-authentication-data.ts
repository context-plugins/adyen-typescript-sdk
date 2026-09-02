import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssociationDelegatedAuthenticationData = {
  sdkOutput: string;
};

export const associationDelegatedAuthenticationDataSchema: Schema<AssociationDelegatedAuthenticationData> =
  s.object<AssociationDelegatedAuthenticationData>({
    sdkOutput: s.string(),
  });

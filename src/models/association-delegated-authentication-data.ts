import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssociationDelegatedAuthenticationData = {
  /**
   * A base64-encoded block with the data required to authenticate the request. You obtain this
   * information by using our authentication SDK.
   */
  sdkOutput: string;
};

export const associationDelegatedAuthenticationDataSchema: Schema<AssociationDelegatedAuthenticationData> =
  s.object<AssociationDelegatedAuthenticationData>({
    sdkOutput: s.string(),
  });

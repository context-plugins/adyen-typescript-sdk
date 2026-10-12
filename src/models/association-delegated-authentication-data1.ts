import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains authentication information required to associate the resource with the SCA device. */
export type AssociationDelegatedAuthenticationData1 = {
  /**
   * A base64-encoded block with the data required to authenticate the request. You obtain this
   * information by using our authentication SDK.
   */
  sdkOutput: string;
};

export const associationDelegatedAuthenticationData1Schema: Schema<AssociationDelegatedAuthenticationData1> =
  s.object<AssociationDelegatedAuthenticationData1>({
    sdkOutput: s.string(),
  });

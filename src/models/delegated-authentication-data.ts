import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DelegatedAuthenticationData = {
  /**
   * A base64-encoded block with the data required to register the SCA device. You obtain this
   * information by using our authentication SDK.
   */
  sdkOutput: string;
};

export const delegatedAuthenticationDataSchema: Schema<DelegatedAuthenticationData> =
  s.object<DelegatedAuthenticationData>({
    sdkOutput: s.string(),
  });

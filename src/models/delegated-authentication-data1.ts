import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains information required to register the SCA device. */
export type DelegatedAuthenticationData1 = {
  /**
   * A base64-encoded block with the data required to register the SCA device. You obtain this
   * information by using our authentication SDK.
   */
  sdkOutput: string;
};

export const delegatedAuthenticationData1Schema: Schema<DelegatedAuthenticationData1> =
  s.object<DelegatedAuthenticationData1>({
    sdkOutput: s.string(),
  });

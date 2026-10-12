import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FinishScaDeviceRegistrationRequest = {
  /**
   * A base64-encoded block with the data required to register the SCA device. You obtain this
   * information by using Adyen's authentication SDK.
   */
  sdkOutput: string;
};

export const finishScaDeviceRegistrationRequestSchema: Schema<FinishScaDeviceRegistrationRequest> =
  s.object<FinishScaDeviceRegistrationRequest>({
    sdkOutput: s.string(),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BeginScaDeviceRegistrationRequest = {
  /**
   * The name of the SCA device that you are registering. You can use it to help your users identify
   * the device.
   */
  name: string;
  /**
   * A base64-encoded block with the data required to register the SCA device. You obtain this
   * information by using Adyen's authentication SDK.
   */
  sdkOutput: string;
};

export const beginScaDeviceRegistrationRequestSchema: Schema<BeginScaDeviceRegistrationRequest> =
  s.object<BeginScaDeviceRegistrationRequest>({
    name: s.string(),
    sdkOutput: s.string(),
  });

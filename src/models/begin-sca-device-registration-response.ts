import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scaDeviceSchema, type ScaDevice } from "./sca-device.js";

export type BeginScaDeviceRegistrationResponse = {
  /**
   * A resource that contains information about a device, including its unique ID, name, and type.
   */
  scaDevice?: ScaDevice;
  /**
   * A string that you must pass to the authentication SDK to continue with the registration
   * process.
   */
  sdkInput?: string;
};

export const beginScaDeviceRegistrationResponseSchema: Schema<BeginScaDeviceRegistrationResponse> =
  s.object<BeginScaDeviceRegistrationResponse>({
    scaDevice: s.optional(s.lazy(() => scaDeviceSchema)),
    sdkInput: s.optional(s.string()),
  });

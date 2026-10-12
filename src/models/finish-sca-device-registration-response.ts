import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scaDeviceSchema, type ScaDevice } from "./sca-device.js";

export type FinishScaDeviceRegistrationResponse = {
  /**
   * A resource that contains information about a device, including its unique ID, name, and type.
   */
  scaDevice?: ScaDevice;
};

export const finishScaDeviceRegistrationResponseSchema: Schema<FinishScaDeviceRegistrationResponse> =
  s.object<FinishScaDeviceRegistrationResponse>({
    scaDevice: s.optional(s.lazy(() => scaDeviceSchema)),
  });

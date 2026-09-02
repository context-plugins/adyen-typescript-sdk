import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scaDeviceSchema, type ScaDevice } from "./sca-device.js";

export type BeginScaDeviceRegistrationResponse = {
  scaDevice?: ScaDevice;
  sdkInput?: string;
};

export const beginScaDeviceRegistrationResponseSchema: Schema<BeginScaDeviceRegistrationResponse> =
  s.object<BeginScaDeviceRegistrationResponse>({
    scaDevice: s.optional(s.lazy(() => scaDeviceSchema)),
    sdkInput: s.optional(s.string()),
  });

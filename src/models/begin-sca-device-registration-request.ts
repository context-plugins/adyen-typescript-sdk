import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BeginScaDeviceRegistrationRequest = {
  name: string;
  sdkOutput: string;
};

export const beginScaDeviceRegistrationRequestSchema: Schema<BeginScaDeviceRegistrationRequest> =
  s.object<BeginScaDeviceRegistrationRequest>({
    name: s.string(),
    sdkOutput: s.string(),
  });

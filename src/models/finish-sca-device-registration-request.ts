import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FinishScaDeviceRegistrationRequest = {
  sdkOutput: string;
};

export const finishScaDeviceRegistrationRequestSchema: Schema<FinishScaDeviceRegistrationRequest> =
  s.object<FinishScaDeviceRegistrationRequest>({
    sdkOutput: s.string(),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NetworkTokenActivationDataResponse = {
  sdkInput?: string;
};

export const networkTokenActivationDataResponseSchema: Schema<NetworkTokenActivationDataResponse> =
  s.object<NetworkTokenActivationDataResponse>({
    sdkInput: s.optional(s.string()),
  });

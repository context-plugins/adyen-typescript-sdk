import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NetworkTokenActivationDataRequest = {
  sdkOutput?: string;
};

export const networkTokenActivationDataRequestSchema: Schema<NetworkTokenActivationDataRequest> =
  s.object<NetworkTokenActivationDataRequest>({
    sdkOutput: s.optional(s.string()),
  });

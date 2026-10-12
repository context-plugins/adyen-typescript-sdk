import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NetworkTokenActivationDataResponse = {
  /**
   * A block of data that contains the activation data for a network token. This `sdkInput` is
   * required to initialize Adyen's SDK for network token provisioning.
   *
   * For more information, see the repositories for Adyen's SDKs for network token provisioning:
   * * [Adyen Apple Pay Provisioning
   *   SDK](https://github.com/Adyen/adyen-apple-pay-provisioning-ios).
   * * [Adyen Google Wallet Provisioning SDK](https://github.com/Adyen/adyen-issuing-android)
   */
  sdkInput?: string;
};

export const networkTokenActivationDataResponseSchema: Schema<NetworkTokenActivationDataResponse> =
  s.object<NetworkTokenActivationDataResponse>({
    sdkInput: s.optional(s.string()),
  });

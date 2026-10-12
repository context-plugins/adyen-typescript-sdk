import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Configuration for creating redundant payment tokens with third-party token vaults using the Adyen
 * Forward API. This feature requires Forward API webhook integration and pre-configured templates
 * in your Adyen account. Contact your Adyen account manager for setup and availability.
 */
export type ThirdPartyTokenRedundancyInfo1 = {
  /**
   * Request-specific parameter values to populate the template placeholders. Each key must match a
   * placeholder defined in the template referenced by `requestTemplateCode`.
   */
  requestParameters?: Record<string, string>;
  /**
   * Identifier for the third-party token request template configured in your Adyen account. This
   * template defines the structure and endpoint for token requests.
   */
  requestTemplateCode: string;
};

export const thirdPartyTokenRedundancyInfo1Schema: Schema<ThirdPartyTokenRedundancyInfo1> =
  s.object<ThirdPartyTokenRedundancyInfo1>({
    requestParameters: s.optional(s.record(s.string(), s.string())),
    requestTemplateCode: s.string(),
  });

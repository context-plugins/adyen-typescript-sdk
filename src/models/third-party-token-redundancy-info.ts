import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ThirdPartyTokenRedundancyInfo = {
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

export const thirdPartyTokenRedundancyInfoSchema: Schema<ThirdPartyTokenRedundancyInfo> =
  s.object<ThirdPartyTokenRedundancyInfo>({
    requestParameters: s.optional(s.record(s.string(), s.string())),
    requestTemplateCode: s.string(),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { termsOfServiceTypeSchema, type TermsOfServiceType } from "./terms-of-service-type.js";

export type CalculateTermsOfServiceStatusResponse = {
  /**
   * The type of Terms of Service that the legal entity needs to accept. If empty, no Terms of
   * Service needs to be accepted.
   */
  termsOfServiceTypes?: TermsOfServiceType[];
};

export const calculateTermsOfServiceStatusResponseSchema: Schema<CalculateTermsOfServiceStatusResponse> =
  s.object<CalculateTermsOfServiceStatusResponse>({
    termsOfServiceTypes: s.optional(s.array(s.lazy(() => termsOfServiceTypeSchema))),
  });

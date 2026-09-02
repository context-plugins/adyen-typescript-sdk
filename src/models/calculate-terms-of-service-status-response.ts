import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { termsOfServiceTypeSchema, type TermsOfServiceType } from "./terms-of-service-type.js";

export type CalculateTermsOfServiceStatusResponse = {
  termsOfServiceTypes?: TermsOfServiceType[];
};

export const calculateTermsOfServiceStatusResponseSchema: Schema<CalculateTermsOfServiceStatusResponse> =
  s.object<CalculateTermsOfServiceStatusResponse>({
    termsOfServiceTypes: s.optional(s.array(s.lazy(() => termsOfServiceTypeSchema))),
  });

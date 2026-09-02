import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AcceptTermsOfServiceRequest = {
  acceptedBy: string;
  ipAddress?: string;
};

export const acceptTermsOfServiceRequestSchema: Schema<AcceptTermsOfServiceRequest> =
  s.object<AcceptTermsOfServiceRequest>({
    acceptedBy: s.string(),
    ipAddress: s.optional(s.string()),
  });

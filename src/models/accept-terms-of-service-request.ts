import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AcceptTermsOfServiceRequest = {
  /**
   * The legal entity ID of the user accepting the Terms of Service.
   *
   * For organizations, this must be the individual legal entity ID of an authorized signatory for
   * the organization.
   *
   * For sole proprietorships, this must be the individual legal entity ID of the owner.
   *
   * For individuals, this must be the individual legal entity id of either the individual, parent,
   * or guardian.
   */
  acceptedBy: string;
  /** The IP address of the user accepting the Terms of Service. */
  ipAddress?: string;
};

export const acceptTermsOfServiceRequestSchema: Schema<AcceptTermsOfServiceRequest> =
  s.object<AcceptTermsOfServiceRequest>({
    acceptedBy: s.string(),
    ipAddress: s.optional(s.string()),
  });

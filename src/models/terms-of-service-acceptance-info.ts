import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type64Schema, type Type64 } from "./type64.js";

export type TermsOfServiceAcceptanceInfo = {
  /** The unique identifier of the user that accepted the Terms of Service. */
  acceptedBy?: string;
  /** The unique identifier of the legal entity for which the Terms of Service are accepted. */
  acceptedFor?: string;
  /**
   * The date when the Terms of Service were accepted, in ISO 8601 extended format. For example,
   * 2022-12-18T10:15:30+01:00.
   */
  createdAt?: Date;
  /** An Adyen-generated reference for the accepted Terms of Service. */
  id?: string;
  /**
   * The type of Terms of Service.
   *
   * Possible values:
   * * **adyenForPlatformsManage**
   * * **adyenIssuing**
   * * **adyenForPlatformsAdvanced**
   * * **adyenCapital**
   * * **adyenAccount**
   * * **adyenCard**
   * * **adyenFranchisee**
   * * **adyenPccr**
   * * **adyenChargeCard**
   * * **kycOnInvite**
   */
  type?: Type64;
  /**
   * The expiration date for the Terms of Service acceptance, in ISO 8601 extended format. For
   * example, 2022-12-18T00:00:00+01:00.
   */
  validTo?: Date;
};

export const termsOfServiceAcceptanceInfoSchema: Schema<TermsOfServiceAcceptanceInfo> =
  s.object<TermsOfServiceAcceptanceInfo>({
    acceptedBy: s.optional(s.string()),
    acceptedFor: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => type64Schema)),
    validTo: s.optional(s.dateTime()),
  });

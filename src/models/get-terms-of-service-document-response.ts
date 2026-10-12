import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type64Schema, type Type64 } from "./type64.js";

export type GetTermsOfServiceDocumentResponse = {
  /** The Terms of Service document in Base64-encoded format. */
  document?: string;
  /** The unique identifier of the legal entity. */
  id?: string;
  /**
   * The language used for the Terms of Service document, specified by the two-letter [ISO
   * 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. Possible value:
   * **en** for English or **fr** for French.
   *
   * Note that French is only available for some integration types in certain countries/regions.
   * Reach out to your Adyen contact for more information.
   */
  language?: string;
  /** The format of the Terms of Service document. */
  termsOfServiceDocumentFormat?: string;
  /** The unique identifier of the Terms of Service document. */
  termsOfServiceDocumentId?: string;
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
};

export const getTermsOfServiceDocumentResponseSchema: Schema<GetTermsOfServiceDocumentResponse> =
  s.object<GetTermsOfServiceDocumentResponse>({
    document: s.optional(s.string()),
    id: s.optional(s.string()),
    language: s.optional(s.string()),
    termsOfServiceDocumentFormat: s.optional(s.string()),
    termsOfServiceDocumentId: s.optional(s.string()),
    type: s.optional(s.lazy(() => type64Schema)),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type64Schema, type Type64 } from "./type64.js";

export type GetTermsOfServiceDocumentRequest = {
  /**
   * The language to be used for the Terms of Service document, specified by the two-letter [ISO
   * 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. Possible values:
   * **en** for English or **fr** for French.
   */
  language: string;
  /**
   * The requested format for the Terms of Service document. Default value: JSON. Possible values:
   * **JSON**, **PDF**, or **TXT**.
   */
  termsOfServiceDocumentFormat?: string;
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
  type: Type64;
};

export const getTermsOfServiceDocumentRequestSchema: Schema<GetTermsOfServiceDocumentRequest> =
  s.object<GetTermsOfServiceDocumentRequest>({
    language: s.string(),
    termsOfServiceDocumentFormat: s.optional(s.string()),
    type: type64Schema,
  });

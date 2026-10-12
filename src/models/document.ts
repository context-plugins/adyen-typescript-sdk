import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attachmentSchema, type Attachment } from "./attachment.js";
import { attachment1Schema, type Attachment1 } from "./attachment1.js";
import { ownerEntity2Schema, type OwnerEntity2 } from "./owner-entity2.js";
import { type84Schema, type Type84 } from "./type84.js";

export type Document = {
  /** Object that contains the document. */
  attachment?: Attachment1;
  /**
   * Array that contains the document. The array supports multiple attachments for uploading
   * different sides or pages of a document.
   */
  attachments?: Attachment[];
  /** The creation date of the document. */
  creationDate?: Date;
  /** Your description for the document. */
  description: string;
  /**
   * The expiry date of the document, in YYYY-MM-DD format.
   *
   * @deprecated
   */
  expiryDate?: string;
  /** The filename of the document. */
  fileName?: string;
  /** The unique identifier of the document. */
  id?: string;
  /**
   * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   * country code where the document was issued. For example, **US**.
   *
   * @deprecated
   */
  issuerCountry?: string;
  /**
   * The state or province where the document was issued (AU only).
   *
   * @deprecated
   */
  issuerState?: string;
  /** The modification date of the document. */
  modificationDate?: Date;
  /** The number in the document. */
  number?: string;
  /** Contains information about the resource that owns the document. */
  owner?: OwnerEntity2;
  /**
   * Type of document, used when providing an ID number or uploading a document. The possible values
   * depend on the legal entity type.
   *
   * * For **organization**, the `type` values can be **proofOfAddress**, **registrationDocument**,
   *   **vatDocument**, **proofOfOrganizationTaxInfo**, **proofOfOwnership**, **proofOfIndustry**,
   *   **proofOfSignatory**, **proofOfDirector**, or **proofOfFundingOrWealthSource**.
   *
   * * For **individual**, the `type` values can be **identityCard**, **driversLicense**,
   *   **passport**, **liveSelfie**, **proofOfNationalIdNumber**, **proofOfResidency**,
   *   **proofOfIndustry**, **proofOfIndividualTaxId**, **proofOfFundingOrWealthSource** or
   *   **proofOfRelationship**.
   *
   * * For **soleProprietorship**, the `type` values can be **constitutionalDocument**,
   *   **proofOfAddress**, or **proofOfIndustry**.
   *
   * * For **trust**, the `type` value is **constitutionalDocument**.
   *
   * * For **unincorporatedPartnership**, the `type` value is **constitutionalDocument**.
   *
   * * Use **bankStatement** to upload documents for a [transfer
   *   instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).
   */
  type: Type84;
};

export const documentSchema: Schema<Document> = s.object<Document>({
  attachment: s.optional(s.lazy(() => attachment1Schema)),
  attachments: s.optional(s.array(s.lazy(() => attachmentSchema))),
  creationDate: s.optional(s.dateTime()),
  description: s.string(),
  expiryDate: s.optional(s.string()),
  fileName: s.optional(s.string()),
  id: s.optional(s.string()),
  issuerCountry: s.optional(s.string()),
  issuerState: s.optional(s.string()),
  modificationDate: s.optional(s.dateTime()),
  number: s.optional(s.string()),
  owner: s.optional(s.lazy(() => ownerEntity2Schema)),
  type: type84Schema,
});

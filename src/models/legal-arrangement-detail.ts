import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  legalArrangementEntityDetailSchema,
  type LegalArrangementEntityDetail,
} from "./legal-arrangement-entity-detail.js";
import { legalFormSchema, type LegalForm } from "./legal-form.js";
import { type110Schema, type Type110 } from "./type110.js";
import { viasAddress4Schema, type ViasAddress4 } from "./vias-address4.js";

export type LegalArrangementDetail = {
  /** The address of the legal arrangement. */
  address: ViasAddress4;
  /**
   * Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response
   * when you create a legal arrangement. Use only when updating an account holder. If you include
   * this field when creating an account holder, the request will fail.
   */
  legalArrangementCode?: string;
  /**
   * An array containing information about other entities that are part of the legal arrangement.
   */
  legalArrangementEntities?: LegalArrangementEntityDetail[];
  /** Your reference for the legal arrangement. Must be between 3 to 128 characters. */
  legalArrangementReference?: string;
  /**
   * The form of legal arrangement. Required if `type` is **Trust** or **Partnership**.
   *
   * The possible values depend on the `type`.
   *
   * - For `type` **Trust**: **CashManagementTrust**, **CorporateUnitTrust**, **DeceasedEstate**,
   *   **DiscretionaryInvestmentTrust**, **DiscretionaryServicesManagementTrust**,
   *   **DiscretionaryTradingTrust**, **FirstHomeSaverAccountsTrust**, **FixedTrust**,
   *   **FixedUnitTrust**, **HybridTrust**, **ListedPublicUnitTrust**, **OtherTrust**,
   *   **PooledSuperannuationTrust**, **PublicTradingTrust**, or **UnlistedPublicUnitTrust**.
   *
   * - For `type` **Partnership**: **LimitedPartnership**, **FamilyPartnership**, or
   *   **OtherPartnership**
   */
  legalForm?: LegalForm;
  /** The legal name of the legal arrangement. Minimum length: 3 characters. */
  name: string;
  /** The registration number of the legal arrangement. */
  registrationNumber?: string;
  /** The tax identification number of the legal arrangement. */
  taxNumber?: string;
  /**
   * The [type of legal
   * arrangement](https://docs.adyen.com/classic-platforms/verification-process/legal-arrangements#types-of-legal-arrangements).
   *
   * Possible values:
   *
   * - **Association**
   *
   * - **Partnership**
   *
   * - **SoleProprietorship**
   *
   * - **Trust**
   */
  type: Type110;
};

export const legalArrangementDetailSchema: Schema<LegalArrangementDetail> = s.object<LegalArrangementDetail>({
  address: viasAddress4Schema,
  legalArrangementCode: s.optional(s.string()),
  legalArrangementEntities: s.optional(s.array(s.lazy(() => legalArrangementEntityDetailSchema))),
  legalArrangementReference: s.optional(s.string()),
  legalForm: s.optional(s.lazy(() => legalFormSchema)),
  name: s.string(),
  registrationNumber: s.optional(s.string()),
  taxNumber: s.optional(s.string()),
  type: type110Schema,
});

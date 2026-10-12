import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessDetails1Schema, type BusinessDetails1 } from "./business-details1.js";
import { individualDetails1Schema, type IndividualDetails1 } from "./individual-details1.js";
import { legalArrangementMemberSchema, type LegalArrangementMember } from "./legal-arrangement-member.js";
import { legalEntityTypeSchema, type LegalEntityType } from "./legal-entity-type.js";
import { viasAddress5Schema, type ViasAddress5 } from "./vias-address5.js";
import { viasPhoneNumber2Schema, type ViasPhoneNumber2 } from "./vias-phone-number2.js";

export type LegalArrangementEntityDetail = {
  /** The address of the entity. */
  address?: ViasAddress5;
  /**
   * Required when creating an entity with `legalEntityType` **Business**, **NonProfit**,
   * **PublicCompany**, or **Partnership**.
   */
  businessDetails?: BusinessDetails1;
  /** The e-mail address of the entity. */
  email?: string;
  /**
   * The phone number of the contact provided as a single string. It will be handled as a landline
   * phone. **Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"
   */
  fullPhoneNumber?: string;
  /** Required when creating an entity with `legalEntityType` **Individual**. */
  individualDetails?: IndividualDetails1;
  /**
   * Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response
   * when you create a legal arrangement entity. Use only when updating an account holder. If you
   * include this field when creating an account holder, the request will fail.
   */
  legalArrangementEntityCode?: string;
  /** Your reference for the legal arrangement entity. */
  legalArrangementEntityReference?: string;
  /**
   * An array containing the roles of the entity in the legal arrangement.
   *
   * The possible values depend on the legal arrangement `type`.
   *
   * - For `type` **Association**: **ControllingPerson** and **Shareholder**.
   *
   * - For `type` **Partnership**: **Partner** and **Shareholder**.
   *
   * - For `type` **Trust**: **Trustee**, **Settlor**, **Protector**, **Beneficiary**, and
   *   **Shareholder**.
   */
  legalArrangementMembers?: LegalArrangementMember[];
  /**
   * The legal entity type.
   *
   * Possible values: **Business**, **Individual**, **NonProfit**, **PublicCompany**, or
   * **Partnership**.
   */
  legalEntityType?: LegalEntityType;
  /** The phone number of the entity. */
  phoneNumber?: ViasPhoneNumber2;
  /** The URL of the website of the contact. */
  webAddress?: string;
};

export const legalArrangementEntityDetailSchema: Schema<LegalArrangementEntityDetail> =
  s.object<LegalArrangementEntityDetail>({
    address: s.optional(s.lazy(() => viasAddress5Schema)),
    businessDetails: s.optional(s.lazy(() => businessDetails1Schema)),
    email: s.optional(s.string()),
    fullPhoneNumber: s.optional(s.string()),
    individualDetails: s.optional(s.lazy(() => individualDetails1Schema)),
    legalArrangementEntityCode: s.optional(s.string()),
    legalArrangementEntityReference: s.optional(s.string()),
    legalArrangementMembers: s.optional(s.array(s.lazy(() => legalArrangementMemberSchema))),
    legalEntityType: s.optional(s.lazy(() => legalEntityTypeSchema)),
    phoneNumber: s.optional(s.lazy(() => viasPhoneNumber2Schema)),
    webAddress: s.optional(s.string()),
  });

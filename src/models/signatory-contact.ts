import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { viasAddress2Schema, type ViasAddress2 } from "./vias-address2.js";
import { viasName1Schema, type ViasName1 } from "./vias-name1.js";
import { viasPersonalData1Schema, type ViasPersonalData1 } from "./vias-personal-data1.js";
import { viasPhoneNumber1Schema, type ViasPhoneNumber1 } from "./vias-phone-number1.js";

export type SignatoryContact = {
  /** The address of the person. */
  address?: ViasAddress2;
  /** The e-mail address of the person. */
  email?: string;
  /**
   * The phone number of the person provided as a single string. It will be handled as a landline
   * phone. Examples: "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"
   */
  fullPhoneNumber?: string;
  /**
   * Job title of the signatory.
   *
   * Example values: **Chief Executive Officer**, **Chief Financial Officer**, **Chief Operating
   * Officer**, **President**, **Vice President**, **Executive President**, **Managing Member**,
   * **Partner**, **Treasurer**, **Director**, or **Other**.
   */
  jobTitle?: string;
  /** The name of the person. */
  name?: ViasName1;
  /** Contains information about the person. */
  personalData?: ViasPersonalData1;
  /** The phone number of the person. */
  phoneNumber?: ViasPhoneNumber1;
  /**
   * The unique identifier (UUID) of the signatory. >**If, during an Account Holder create or update
   * request, this field is left blank (but other fields provided), a new Signatory will be created
   * with a procedurally-generated UUID.**
   *
   * >**If, during an Account Holder create request, a UUID is provided, the creation of the
   * Signatory will fail while the creation of the Account Holder will continue.**
   *
   * >**If, during an Account Holder update request, a UUID that is not correlated with an existing
   * Signatory is provided, the update of the Signatory will fail.**
   *
   * >**If, during an Account Holder update request, a UUID that is correlated with an existing
   * Signatory is provided, the existing Signatory will be updated.**
   */
  signatoryCode?: string;
  /** Your reference for the signatory. */
  signatoryReference?: string;
  /** The URL of the person's website. */
  webAddress?: string;
};

export const signatoryContactSchema: Schema<SignatoryContact> = s.object<SignatoryContact>({
  address: s.optional(s.lazy(() => viasAddress2Schema)),
  email: s.optional(s.string()),
  fullPhoneNumber: s.optional(s.string()),
  jobTitle: s.optional(s.string()),
  name: s.optional(s.lazy(() => viasName1Schema)),
  personalData: s.optional(s.lazy(() => viasPersonalData1Schema)),
  phoneNumber: s.optional(s.lazy(() => viasPhoneNumber1Schema)),
  signatoryCode: s.optional(s.string()),
  signatoryReference: s.optional(s.string()),
  webAddress: s.optional(s.string()),
});

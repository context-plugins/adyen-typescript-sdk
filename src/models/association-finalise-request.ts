import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  associationDelegatedAuthenticationData1Schema,
  type AssociationDelegatedAuthenticationData1,
} from "./association-delegated-authentication-data1.js";

export type AssociationFinaliseRequest = {
  /**
   * The list of unique identifiers of the resources that you are associating with the SCA device.
   *
   * Maximum: 5 strings.
   */
  ids: string[];
  /** Contains authentication information required to associate the resource with the SCA device. */
  strongCustomerAuthentication: AssociationDelegatedAuthenticationData1;
  /**
   * The type of resource that you are associating with the SCA device.
   *
   * Possible value: **PaymentInstrument**
   *
   * @default "PaymentInstrument"
   */
  type?: "PaymentInstrument";
};

export const associationFinaliseRequestSchema: Schema<AssociationFinaliseRequest> =
  s.object<AssociationFinaliseRequest>({
    ids: s.array(s.string()),
    strongCustomerAuthentication: associationDelegatedAuthenticationData1Schema,
    type: s.defaulted(s.literal("PaymentInstrument"), "PaymentInstrument"),
  });

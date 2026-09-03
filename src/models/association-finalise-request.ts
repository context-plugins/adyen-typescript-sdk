import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  associationDelegatedAuthenticationData1Schema,
  type AssociationDelegatedAuthenticationData1,
} from "./association-delegated-authentication-data1.js";

export type AssociationFinaliseRequest = {
  ids: string[];
  strongCustomerAuthentication: AssociationDelegatedAuthenticationData1;
  type: "PaymentInstrument";
};

export const associationFinaliseRequestSchema: Schema<AssociationFinaliseRequest> =
  s.object<AssociationFinaliseRequest>({
    ids: s.array(s.string()),
    strongCustomerAuthentication: associationDelegatedAuthenticationData1Schema,
    type: s.literal("PaymentInstrument"),
  });

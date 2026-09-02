import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  delegatedAuthenticationData1Schema,
  type DelegatedAuthenticationData1,
} from "./delegated-authentication-data1.js";

export type RegisterScaRequest = {
  name?: string;
  paymentInstrumentId: string;
  strongCustomerAuthentication: DelegatedAuthenticationData1;
};

export const registerScaRequestSchema: Schema<RegisterScaRequest> = s.object<RegisterScaRequest>({
  name: s.optional(s.string()),
  paymentInstrumentId: s.string(),
  strongCustomerAuthentication: delegatedAuthenticationData1Schema,
});

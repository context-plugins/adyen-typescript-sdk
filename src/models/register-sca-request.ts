import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  delegatedAuthenticationData1Schema,
  type DelegatedAuthenticationData1,
} from "./delegated-authentication-data1.js";

export type RegisterScaRequest = {
  /**
   * The name of the SCA device that you are registering. You can use it to help your users identify
   * the device.
   *
   * If you do not specify a `name`, Adyen automatically generates one.
   */
  name?: string;
  /**
   * The unique identifier of the payment instrument for which you are registering the SCA device.
   */
  paymentInstrumentId: string;
  /** Contains information required to register the SCA device. */
  strongCustomerAuthentication: DelegatedAuthenticationData1;
};

export const registerScaRequestSchema: Schema<RegisterScaRequest> = s.object<RegisterScaRequest>({
  name: s.optional(s.string()),
  paymentInstrumentId: s.string(),
  strongCustomerAuthentication: delegatedAuthenticationData1Schema,
});

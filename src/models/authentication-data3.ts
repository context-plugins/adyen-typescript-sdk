import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attemptAuthenticationSchema, type AttemptAuthentication } from "./attempt-authentication.js";
import { threeDsRequestData2Schema, type ThreeDsRequestData2 } from "./three-ds-request-data2.js";

export type AuthenticationData3 = {
  attemptAuthentication?: AttemptAuthentication;
  authenticationOnly?: boolean;
  threeDsRequestData?: ThreeDsRequestData2;
};

export const authenticationData3Schema: Schema<AuthenticationData3> = s.object<AuthenticationData3>({
  attemptAuthentication: s.optional(s.lazy(() => attemptAuthenticationSchema)),
  authenticationOnly: s.optional(s.boolean()),
  threeDsRequestData: s.optional(s.lazy(() => threeDsRequestData2Schema)),
  _keysMap: {
    threeDsRequestData: "threeDSRequestData",
  },
});

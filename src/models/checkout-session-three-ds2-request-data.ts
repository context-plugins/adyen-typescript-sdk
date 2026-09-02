import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phone1Schema, type Phone1 } from "./phone1.js";
import { phone2Schema, type Phone2 } from "./phone2.js";
import { phone3Schema, type Phone3 } from "./phone3.js";
import {
  threeDsRequestorChallengeIndSchema,
  type ThreeDsRequestorChallengeInd,
} from "./three-ds-requestor-challenge-ind.js";

export type CheckoutSessionThreeDs2RequestData = {
  homePhone?: Phone3;
  mobilePhone?: Phone1;
  threeDsRequestorChallengeInd?: ThreeDsRequestorChallengeInd;
  workPhone?: Phone2;
};

export const checkoutSessionThreeDs2RequestDataSchema: Schema<CheckoutSessionThreeDs2RequestData> =
  s.object<CheckoutSessionThreeDs2RequestData>({
    homePhone: s.optional(s.lazy(() => phone3Schema)),
    mobilePhone: s.optional(s.lazy(() => phone1Schema)),
    threeDsRequestorChallengeInd: s.optional(s.lazy(() => threeDsRequestorChallengeIndSchema)),
    workPhone: s.optional(s.lazy(() => phone2Schema)),
    _keysMap: {
      threeDsRequestorChallengeInd: "threeDSRequestorChallengeInd",
    },
  });

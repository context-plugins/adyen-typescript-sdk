import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phone1Schema, type Phone1 } from "./phone1.js";
import { phone2Schema, type Phone2 } from "./phone2.js";
import { phone3Schema, type Phone3 } from "./phone3.js";
import {
  threeDsRequestorChallengeIndSchema,
  type ThreeDsRequestorChallengeInd,
} from "./three-ds-requestor-challenge-ind.js";

/**
 * Request fields for 3D Secure 2. To check if any of the following fields are required for your
 * integration, refer to [Online payments](https://docs.adyen.com/online-payments).
 */
export type CheckoutSessionThreeDs2RequestData1 = {
  /**
   * The home phone number provided by the cardholder. The phone number must consist of a country
   * code, followed by the number. If the value you provide does not follow the guidelines, we do
   * not submit it for authentication. > Required for Visa and JCB transactions that require 3D
   * Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the
   * shopper's phone number in `telephoneNumber`.
   */
  homePhone?: Phone3;
  /**
   * The mobile phone number provided by the cardholder. The phone number must consist of a country
   * code, followed by the number. If the value you provide does not follow the guidelines, we do
   * not submit it for authentication. > Required for Visa and JCB transactions that require 3D
   * Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the
   * shopper's phone number in `telephoneNumber`.
   */
  mobilePhone?: Phone1;
  /**
   * Indicates whether a challenge is requested for this transaction. Possible values:
   * * **01** — No preference
   * * **02** — No challenge requested
   * * **03** — Challenge requested (3DS Requestor preference)
   * * **04** — Challenge requested (Mandate)
   * * **05** — No challenge (transactional risk analysis is already performed)
   * * **06** — Data Only
   */
  threeDsRequestorChallengeInd?: ThreeDsRequestorChallengeInd;
  /**
   * The work phone number provided by the cardholder. The phone number must consist of a country
   * code, followed by the number. If the value you provide does not follow the guidelines, we do
   * not submit it for authentication. > Required for Visa and JCB transactions that require 3D
   * Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the
   * shopper's phone number in `telephoneNumber`.
   */
  workPhone?: Phone2;
};

export const checkoutSessionThreeDs2RequestData1Schema: Schema<CheckoutSessionThreeDs2RequestData1> =
  s.object<CheckoutSessionThreeDs2RequestData1>({
    homePhone: s.optional(s.lazy(() => phone3Schema)),
    mobilePhone: s.optional(s.lazy(() => phone1Schema)),
    threeDsRequestorChallengeInd: s.optional(s.lazy(() => threeDsRequestorChallengeIndSchema)),
    workPhone: s.optional(s.lazy(() => phone2Schema)),
    _keysMap: {
      threeDsRequestorChallengeInd: "threeDSRequestorChallengeInd",
    },
  });

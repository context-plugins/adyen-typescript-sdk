import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { panEntryModeSchema, type PanEntryMode } from "./pan-entry-mode.js";
import { processingType1Schema, type ProcessingType1 } from "./processing-type1.js";
import {
  relayedAuthorisationData2Schema,
  type RelayedAuthorisationData2,
} from "./relayed-authorisation-data2.js";
import { threeDSecure2Schema, type ThreeDSecure2 } from "./three-dsecure2.js";
import {
  transferNotificationValidationFactSchema,
  type TransferNotificationValidationFact,
} from "./transfer-notification-validation-fact.js";
import { Type511, type511Schema } from "./type511.js";

export type IssuedCard = {
  /**
   * The authorisation type. For example, **defaultAuthorisation**, **preAuthorisation**,
   * **finalAuthorisation**
   */
  authorisationType?: string;
  /**
   * Indicates the method used for entering the PAN to initiate a transaction.
   *
   * Possible values: **manual**, **chip**, **magstripe**, **contactless**, **cof**, **ecommerce**,
   * **token**.
   */
  panEntryMode?: PanEntryMode;
  /**
   * Contains information about how the payment was processed.
   *
   * Possible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**,
   * **purchaseWithCashback**, **recurring**, **token**.
   */
  processingType?: ProcessingType1;
  /**
   * If you are using relayed authorisation, this object contains information from the relayed
   * authorisation response from your server.
   */
  relayedAuthorisationData?: RelayedAuthorisationData2;
  /**
   * The identifier of the original payment. This ID is provided by the scheme and can be
   * alphanumeric or numeric, depending on the scheme. The `schemeTraceID` should refer to an
   * original `schemeUniqueTransactionID` provided in an earlier payment (not necessarily processed
   * by Adyen). A `schemeTraceId` is typically available for authorization adjustments or recurring
   * payments.
   */
  schemeTraceId?: string;
  /**
   * The unique identifier created by the scheme. This ID can be alphanumeric or numeric depending
   * on the scheme.
   */
  schemeUniqueTransactionId?: string;
  /** The data of the result from the 3DS authentication. */
  threeDSecure?: ThreeDSecure2;
  /** **issuedCard** @default Type511.IssuedCard */
  type?: Type511;
  /**
   * The evaluation of the validation facts. See [validation
   * checks](https://docs.adyen.com/issuing/validation-checks) for more information.
   */
  validationFacts?: TransferNotificationValidationFact[];
};

export const issuedCardSchema: Schema<IssuedCard> = s.object<IssuedCard>({
  authorisationType: s.optional(s.string()),
  panEntryMode: s.optional(s.lazy(() => panEntryModeSchema)),
  processingType: s.optional(s.lazy(() => processingType1Schema)),
  relayedAuthorisationData: s.optional(s.lazy(() => relayedAuthorisationData2Schema)),
  schemeTraceId: s.optional(s.string()),
  schemeUniqueTransactionId: s.optional(s.string()),
  threeDSecure: s.optional(s.lazy(() => threeDSecure2Schema)),
  type: s.defaulted(type511Schema, Type511.IssuedCard),
  validationFacts: s.optional(s.array(s.lazy(() => transferNotificationValidationFactSchema))),
});

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
import { type511Schema, type Type511 } from "./type511.js";

export type IssuedCard = {
  authorisationType?: string;
  panEntryMode?: PanEntryMode;
  processingType?: ProcessingType1;
  relayedAuthorisationData?: RelayedAuthorisationData2;
  schemeTraceId?: string;
  schemeUniqueTransactionId?: string;
  threeDSecure?: ThreeDSecure2;
  type?: Type511;
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
  type: s.optional(s.lazy(() => type511Schema)),
  validationFacts: s.optional(s.array(s.lazy(() => transferNotificationValidationFactSchema))),
});

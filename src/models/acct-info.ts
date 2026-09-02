import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chAccAgeIndSchema, type ChAccAgeInd } from "./ch-acc-age-ind.js";
import { chAccChangeIndSchema, type ChAccChangeInd } from "./ch-acc-change-ind.js";
import { chAccPwChangeIndSchema, type ChAccPwChangeInd } from "./ch-acc-pw-change-ind.js";
import { paymentAccIndSchema, type PaymentAccInd } from "./payment-acc-ind.js";
import { shipAddressUsageIndSchema, type ShipAddressUsageInd } from "./ship-address-usage-ind.js";
import { shipNameIndicatorSchema, type ShipNameIndicator } from "./ship-name-indicator.js";
import { suspiciousAccActivitySchema, type SuspiciousAccActivity } from "./suspicious-acc-activity.js";

export type AcctInfo = {
  chAccAgeInd?: ChAccAgeInd;
  chAccChange?: string;
  chAccChangeInd?: ChAccChangeInd;
  chAccPwChange?: string;
  chAccPwChangeInd?: ChAccPwChangeInd;
  chAccString?: string;
  nbPurchaseAccount?: string;
  paymentAccAge?: string;
  paymentAccInd?: PaymentAccInd;
  provisionAttemptsDay?: string;
  shipAddressUsage?: string;
  shipAddressUsageInd?: ShipAddressUsageInd;
  shipNameIndicator?: ShipNameIndicator;
  suspiciousAccActivity?: SuspiciousAccActivity;
  txnActivityDay?: string;
  txnActivityYear?: string;
};

export const acctInfoSchema: Schema<AcctInfo> = s.object<AcctInfo>({
  chAccAgeInd: s.optional(s.lazy(() => chAccAgeIndSchema)),
  chAccChange: s.optional(s.string()),
  chAccChangeInd: s.optional(s.lazy(() => chAccChangeIndSchema)),
  chAccPwChange: s.optional(s.string()),
  chAccPwChangeInd: s.optional(s.lazy(() => chAccPwChangeIndSchema)),
  chAccString: s.optional(s.string()),
  nbPurchaseAccount: s.optional(s.string()),
  paymentAccAge: s.optional(s.string()),
  paymentAccInd: s.optional(s.lazy(() => paymentAccIndSchema)),
  provisionAttemptsDay: s.optional(s.string()),
  shipAddressUsage: s.optional(s.string()),
  shipAddressUsageInd: s.optional(s.lazy(() => shipAddressUsageIndSchema)),
  shipNameIndicator: s.optional(s.lazy(() => shipNameIndicatorSchema)),
  suspiciousAccActivity: s.optional(s.lazy(() => suspiciousAccActivitySchema)),
  txnActivityDay: s.optional(s.string()),
  txnActivityYear: s.optional(s.string()),
});

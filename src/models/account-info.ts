import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountAgeIndicatorSchema, type AccountAgeIndicator } from "./account-age-indicator.js";
import { accountChangeIndicatorSchema, type AccountChangeIndicator } from "./account-change-indicator.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import {
  deliveryAddressUsageIndicatorSchema,
  type DeliveryAddressUsageIndicator,
} from "./delivery-address-usage-indicator.js";
import { passwordChangeIndicatorSchema, type PasswordChangeIndicator } from "./password-change-indicator.js";
import { paymentAccountIndicatorSchema, type PaymentAccountIndicator } from "./payment-account-indicator.js";

export type AccountInfo = {
  accountAgeIndicator?: AccountAgeIndicator;
  accountChangeDate?: Date;
  accountChangeIndicator?: AccountChangeIndicator;
  accountCreationDate?: Date;
  accountType?: AccountType;
  addCardAttemptsDay?: number;
  deliveryAddressUsageDate?: Date;
  deliveryAddressUsageIndicator?: DeliveryAddressUsageIndicator;
  homePhone?: string;
  mobilePhone?: string;
  passwordChangeDate?: Date;
  passwordChangeIndicator?: PasswordChangeIndicator;
  pastTransactionsDay?: number;
  pastTransactionsYear?: number;
  paymentAccountAge?: Date;
  paymentAccountIndicator?: PaymentAccountIndicator;
  purchasesLast6Months?: number;
  suspiciousActivity?: boolean;
  workPhone?: string;
};

export const accountInfoSchema: Schema<AccountInfo> = s.object<AccountInfo>({
  accountAgeIndicator: s.optional(s.lazy(() => accountAgeIndicatorSchema)),
  accountChangeDate: s.optional(s.dateTime()),
  accountChangeIndicator: s.optional(s.lazy(() => accountChangeIndicatorSchema)),
  accountCreationDate: s.optional(s.dateTime()),
  accountType: s.optional(s.lazy(() => accountTypeSchema)),
  addCardAttemptsDay: s.optional(s.number()),
  deliveryAddressUsageDate: s.optional(s.dateTime()),
  deliveryAddressUsageIndicator: s.optional(s.lazy(() => deliveryAddressUsageIndicatorSchema)),
  homePhone: s.optional(s.string()),
  mobilePhone: s.optional(s.string()),
  passwordChangeDate: s.optional(s.dateTime()),
  passwordChangeIndicator: s.optional(s.lazy(() => passwordChangeIndicatorSchema)),
  pastTransactionsDay: s.optional(s.number()),
  pastTransactionsYear: s.optional(s.number()),
  paymentAccountAge: s.optional(s.dateTime()),
  paymentAccountIndicator: s.optional(s.lazy(() => paymentAccountIndicatorSchema)),
  purchasesLast6Months: s.optional(s.number()),
  suspiciousActivity: s.optional(s.boolean()),
  workPhone: s.optional(s.string()),
});

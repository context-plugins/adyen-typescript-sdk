import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  activeNetworkTokensRestriction1Schema,
  type ActiveNetworkTokensRestriction1,
} from "./active-network-tokens-restriction1.js";
import {
  brandVariantsRestriction1Schema,
  type BrandVariantsRestriction1,
} from "./brand-variants-restriction1.js";
import {
  counterpartyBankRestriction1Schema,
  type CounterpartyBankRestriction1,
} from "./counterparty-bank-restriction1.js";
import {
  counterpartyTypesRestriction1Schema,
  type CounterpartyTypesRestriction1,
} from "./counterparty-types-restriction1.js";
import { countriesRestriction1Schema, type CountriesRestriction1 } from "./countries-restriction1.js";
import { dayOfWeekRestriction1Schema, type DayOfWeekRestriction1 } from "./day-of-week-restriction1.js";
import {
  differentCurrenciesRestriction1Schema,
  type DifferentCurrenciesRestriction1,
} from "./different-currencies-restriction1.js";
import { entryModesRestriction1Schema, type EntryModesRestriction1 } from "./entry-modes-restriction1.js";
import {
  internationalTransactionRestriction1Schema,
  type InternationalTransactionRestriction1,
} from "./international-transaction-restriction1.js";
import {
  matchingTransactionsRestriction1Schema,
  type MatchingTransactionsRestriction1,
} from "./matching-transactions-restriction1.js";
import {
  matchingValuesRestriction1Schema,
  type MatchingValuesRestriction1,
} from "./matching-values-restriction1.js";
import { mccsRestriction1Schema, type MccsRestriction1 } from "./mccs-restriction1.js";
import {
  merchantNamesRestriction1Schema,
  type MerchantNamesRestriction1,
} from "./merchant-names-restriction1.js";
import { merchantsRestriction1Schema, type MerchantsRestriction1 } from "./merchants-restriction1.js";
import {
  processingTypesRestriction1Schema,
  type ProcessingTypesRestriction1,
} from "./processing-types-restriction1.js";
import { riskScoresRestriction1Schema, type RiskScoresRestriction1 } from "./risk-scores-restriction1.js";
import { sameAmountRestriction1Schema, type SameAmountRestriction1 } from "./same-amount-restriction1.js";
import {
  sameCounterpartyRestriction1Schema,
  type SameCounterpartyRestriction1,
} from "./same-counterparty-restriction1.js";
import {
  sourceAccountTypesRestriction1Schema,
  type SourceAccountTypesRestriction1,
} from "./source-account-types-restriction1.js";
import { timeOfDayRestriction1Schema, type TimeOfDayRestriction1 } from "./time-of-day-restriction1.js";
import {
  tokenRequestorsRestriction1Schema,
  type TokenRequestorsRestriction1,
} from "./token-requestors-restriction1.js";
import { totalAmountRestriction1Schema, type TotalAmountRestriction1 } from "./total-amount-restriction1.js";
import {
  walletProviderAccountScoreRestriction2Schema,
  type WalletProviderAccountScoreRestriction2,
} from "./wallet-provider-account-score-restriction2.js";
import {
  walletProviderDeviceScore2Schema,
  type WalletProviderDeviceScore2,
} from "./wallet-provider-device-score2.js";
import {
  walletProviderDeviceType2Schema,
  type WalletProviderDeviceType2,
} from "./wallet-provider-device-type2.js";

export type TransactionRuleRestrictions = {
  activeNetworkTokens?: ActiveNetworkTokensRestriction1;
  brandVariants?: BrandVariantsRestriction1;
  counterpartyBank?: CounterpartyBankRestriction1;
  counterpartyTypes?: CounterpartyTypesRestriction1;
  countries?: CountriesRestriction1;
  dayOfWeek?: DayOfWeekRestriction1;
  differentCurrencies?: DifferentCurrenciesRestriction1;
  entryModes?: EntryModesRestriction1;
  internationalTransaction?: InternationalTransactionRestriction1;
  matchingTransactions?: MatchingTransactionsRestriction1;
  matchingValues?: MatchingValuesRestriction1;
  mccs?: MccsRestriction1;
  merchantNames?: MerchantNamesRestriction1;
  merchants?: MerchantsRestriction1;
  processingTypes?: ProcessingTypesRestriction1;
  riskScores?: RiskScoresRestriction1;
  sameAmountRestriction?: SameAmountRestriction1;
  sameCounterpartyRestriction?: SameCounterpartyRestriction1;
  sourceAccountTypes?: SourceAccountTypesRestriction1;
  timeOfDay?: TimeOfDayRestriction1;
  tokenRequestors?: TokenRequestorsRestriction1;
  totalAmount?: TotalAmountRestriction1;
  walletProviderAccountScore?: WalletProviderAccountScoreRestriction2;
  walletProviderDeviceScore?: WalletProviderDeviceScore2;
  walletProviderDeviceType?: WalletProviderDeviceType2;
};

export const transactionRuleRestrictionsSchema: Schema<TransactionRuleRestrictions> =
  s.object<TransactionRuleRestrictions>({
    activeNetworkTokens: s.optional(s.lazy(() => activeNetworkTokensRestriction1Schema)),
    brandVariants: s.optional(s.lazy(() => brandVariantsRestriction1Schema)),
    counterpartyBank: s.optional(s.lazy(() => counterpartyBankRestriction1Schema)),
    counterpartyTypes: s.optional(s.lazy(() => counterpartyTypesRestriction1Schema)),
    countries: s.optional(s.lazy(() => countriesRestriction1Schema)),
    dayOfWeek: s.optional(s.lazy(() => dayOfWeekRestriction1Schema)),
    differentCurrencies: s.optional(s.lazy(() => differentCurrenciesRestriction1Schema)),
    entryModes: s.optional(s.lazy(() => entryModesRestriction1Schema)),
    internationalTransaction: s.optional(s.lazy(() => internationalTransactionRestriction1Schema)),
    matchingTransactions: s.optional(s.lazy(() => matchingTransactionsRestriction1Schema)),
    matchingValues: s.optional(s.lazy(() => matchingValuesRestriction1Schema)),
    mccs: s.optional(s.lazy(() => mccsRestriction1Schema)),
    merchantNames: s.optional(s.lazy(() => merchantNamesRestriction1Schema)),
    merchants: s.optional(s.lazy(() => merchantsRestriction1Schema)),
    processingTypes: s.optional(s.lazy(() => processingTypesRestriction1Schema)),
    riskScores: s.optional(s.lazy(() => riskScoresRestriction1Schema)),
    sameAmountRestriction: s.optional(s.lazy(() => sameAmountRestriction1Schema)),
    sameCounterpartyRestriction: s.optional(s.lazy(() => sameCounterpartyRestriction1Schema)),
    sourceAccountTypes: s.optional(s.lazy(() => sourceAccountTypesRestriction1Schema)),
    timeOfDay: s.optional(s.lazy(() => timeOfDayRestriction1Schema)),
    tokenRequestors: s.optional(s.lazy(() => tokenRequestorsRestriction1Schema)),
    totalAmount: s.optional(s.lazy(() => totalAmountRestriction1Schema)),
    walletProviderAccountScore: s.optional(s.lazy(() => walletProviderAccountScoreRestriction2Schema)),
    walletProviderDeviceScore: s.optional(s.lazy(() => walletProviderDeviceScore2Schema)),
    walletProviderDeviceType: s.optional(s.lazy(() => walletProviderDeviceType2Schema)),
  });

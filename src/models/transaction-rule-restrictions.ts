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
  /**
   * The total number of tokens that a card can have across different kinds of digital wallets on
   * the user's phones, watches, or other wearables.
   *
   * Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**,
   * **lessThanOrEqualTo**, **lessThan**.
   */
  activeNetworkTokens?: ActiveNetworkTokensRestriction1;
  /**
   * List of card brand variants and the operation.
   *
   * Supported operations: **anyMatch**, **noneMatch**.
   */
  brandVariants?: BrandVariantsRestriction1;
  /**
   * Contains a list of counterparty financial institutions and how they must be evaluated.
   *
   * Supported operations: **anyMatch**, **noneMatch**.
   */
  counterpartyBank?: CounterpartyBankRestriction1;
  /**
   * Contains a list of counterparty types and how they must be evaluated.
   *
   * Supported operations: **anyMatch**, **noneMatch**.
   *
   * Supported value inputs:
   * - **balanceAccount**
   * - **bankAccount**
   * - **card**
   * - **transferInstrument**
   */
  counterpartyTypes?: CounterpartyTypesRestriction1;
  /**
   * List of countries and the operation.
   *
   * Supported operations: **anyMatch**, **noneMatch**.
   */
  countries?: CountriesRestriction1;
  /** List of week days and the operation. Supported operations: **anyMatch**, **noneMatch**. */
  dayOfWeek?: DayOfWeekRestriction1;
  /**
   * Compares the currency of the payment against the currency of the payment instrument, and
   * specifies the operation.
   *
   * Supported operations: **equals**, **notEquals**.
   */
  differentCurrencies?: DifferentCurrenciesRestriction1;
  /**
   * List of point-of-sale entry modes and the operation..
   *
   * Supported operations: **anyMatch**, **noneMatch**.
   */
  entryModes?: EntryModesRestriction1;
  /**
   * Indicates whether transaction is an international transaction and specifies the operation.
   *
   * Supported operations: **equals**, **notEquals**.
   */
  internationalTransaction?: InternationalTransactionRestriction1;
  /**
   * The number of transactions and the operation.
   *
   * Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**,
   * **lessThanOrEqualTo**, **lessThan**.
   */
  matchingTransactions?: MatchingTransactionsRestriction1;
  /**
   * Checks if a user has recently made multiple transfers with the specified values.
   *
   * To use this restriction, you must:
   *
   * - Set the rule `type` to **velocity**.
   *
   * - Specify a time `interval`.
   *
   * - Specify a number of `matchingTransactions`.
   *
   * Supported operation: **allMatch**.
   *
   * Supported value inputs:
   * - **merchantId** and **acquirerId**
   * - **amount** and **currency**
   * - **merchantName**.
   */
  matchingValues?: MatchingValuesRestriction1;
  /**
   * List of merchant category codes (MCCs) and the operation.
   *
   * Supported operations: **anyMatch**, **noneMatch**.
   */
  mccs?: MccsRestriction1;
  /**
   * List of names that will be compared to the merchant name according to the matching type.
   *
   * Supported operations: **anyMatch**, **noneMatch**.
   */
  merchantNames?: MerchantNamesRestriction1;
  /**
   * List of merchant ID and acquirer ID pairs, and the operation.
   *
   * Supported operations: **anyMatch**, **noneMatch**.
   */
  merchants?: MerchantsRestriction1;
  /**
   * List of processing types and the operation.
   *
   * Supported operations: **anyMatch**, **noneMatch**.
   */
  processingTypes?: ProcessingTypesRestriction1;
  /**
   * Risk scores provided by specific sources. The same operation applies to all scores.
   *
   * Current sources available: **visa**, **mastercard**
   *
   * Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**,
   * **lessThanOrEqualTo**, **lessThan**.
   */
  riskScores?: RiskScoresRestriction1;
  /**
   * Checks if a user has recently sent the same amount of funds in multiple transfers.
   *
   * To use this restriction, you must:
   *
   * - Set the rule `type` to **velocity**.
   *
   * - Specify a time `interval`.
   *
   * - Specify a number of `matchingTransactions`.
   *
   * Supported operation: **equals**.
   */
  sameAmountRestriction?: SameAmountRestriction1;
  /**
   * Checks if a user has recently made multiple transfers to the same counterparty.
   *
   * To use this restriction, you must:
   *
   * - Set the rule `type` to **velocity**.
   *
   * - Specify a time `interval`.
   *
   * - Specify a number of `matchingTransactions`.
   *
   * Supported operations: **equals**.
   */
  sameCounterpartyRestriction?: SameCounterpartyRestriction1;
  /**
   * Contains a list of source account types and how they must be evaluated.
   *
   * Supported operations: **anyMatch**, **noneMatch**.
   *
   * Supported value inputs:
   * - **balanceAccount**
   * - **businessAccount**.
   */
  sourceAccountTypes?: SourceAccountTypesRestriction1;
  /**
   * A start and end time in a time-only ISO-8601 extended offset format. Supported operations:
   * **equals**, **notEquals**.
   */
  timeOfDay?: TimeOfDayRestriction1;
  /**
   * List of token requestor IDs and the operation.
   *
   * Supported operations: **anyMatch**, **noneMatch**.
   */
  tokenRequestors?: TokenRequestorsRestriction1;
  /**
   * The total amount and the operation.
   *
   * Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**,
   * **lessThanOrEqualTo**, **lessThan**.
   */
  totalAmount?: TotalAmountRestriction1;
  /**
   * Checks the wallet account score.
   *
   * Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**,
   * **lessThanOrEqualTo**, **lessThan**.
   */
  walletProviderAccountScore?: WalletProviderAccountScoreRestriction2;
  /**
   * Wallet Provider Device Score and the operation.
   *
   * Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**,
   * **lessThanOrEqualTo**, **lessThan**.
   */
  walletProviderDeviceScore?: WalletProviderDeviceScore2;
  /**
   * Wallet Provider Device Type and the operation.
   *
   * Supported operations: **anyMatch**, **noneMatch**.
   *
   * Supported value inputs:
   * - **MOBILE_PHONE**
   * - **TABLET_OR_EREADER**
   * - **WATCH_OR_WRISTBAND**
   * - **WEARABLE**
   *
   * - **CARD**
   * - **PC**
   * - **OTHER**
   * - **UNKNOWN**
   */
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

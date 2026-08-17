
# Transaction Rule Restrictions

## Structure

`TransactionRuleRestrictions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `activeNetworkTokens` | [`ActiveNetworkTokensRestriction1 \| undefined`](../../doc/models/active-network-tokens-restriction-1.md) | Optional | The total number of tokens that a card can have across different kinds of digital wallets on the user's phones, watches, or other wearables.<br><br>Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**. |
| `brandVariants` | [`BrandVariantsRestriction1 \| undefined`](../../doc/models/brand-variants-restriction-1.md) | Optional | List of card brand variants and the operation.<br><br>Supported operations: **anyMatch**, **noneMatch**. |
| `counterpartyBank` | [`CounterpartyBankRestriction1 \| undefined`](../../doc/models/counterparty-bank-restriction-1.md) | Optional | Contains a list of counterparty financial institutions and how they must be evaluated.<br><br>Supported operations: **anyMatch**, **noneMatch**. |
| `counterpartyTypes` | [`CounterpartyTypesRestriction1 \| undefined`](../../doc/models/counterparty-types-restriction-1.md) | Optional | Contains a list of counterparty types and how they must be evaluated.<br><br>Supported operations: **anyMatch**, **noneMatch**.<br><br>Supported value inputs:<br><br>- **balanceAccount**<br>- **bankAccount**<br>- **card**<br>- **transferInstrument** |
| `countries` | [`CountriesRestriction1 \| undefined`](../../doc/models/countries-restriction-1.md) | Optional | List of countries and the operation.<br><br>Supported operations: **anyMatch**, **noneMatch**. |
| `dayOfWeek` | [`DayOfWeekRestriction1 \| undefined`](../../doc/models/day-of-week-restriction-1.md) | Optional | List of week days and the operation. Supported operations: **anyMatch**, **noneMatch**. |
| `differentCurrencies` | [`DifferentCurrenciesRestriction1 \| undefined`](../../doc/models/different-currencies-restriction-1.md) | Optional | Compares the currency of the payment against the currency of the payment instrument, and specifies the operation.<br><br>Supported operations: **equals**, **notEquals**. |
| `entryModes` | [`EntryModesRestriction1 \| undefined`](../../doc/models/entry-modes-restriction-1.md) | Optional | List of point-of-sale entry modes and the operation..<br><br>Supported operations: **anyMatch**, **noneMatch**. |
| `internationalTransaction` | [`InternationalTransactionRestriction1 \| undefined`](../../doc/models/international-transaction-restriction-1.md) | Optional | Indicates whether transaction is an international transaction and specifies the operation.<br><br>Supported operations: **equals**, **notEquals**. |
| `matchingTransactions` | [`MatchingTransactionsRestriction1 \| undefined`](../../doc/models/matching-transactions-restriction-1.md) | Optional | The number of transactions and the operation.<br><br>Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**. |
| `matchingValues` | [`MatchingValuesRestriction1 \| undefined`](../../doc/models/matching-values-restriction-1.md) | Optional | Checks if a user has recently made multiple transfers with the specified values.<br><br>To use this restriction, you must:<br><br>- Set the rule `type` to **velocity**.<br><br>- Specify a time `interval`.<br><br>- Specify a number of `matchingTransactions`.<br><br>Supported operation: **allMatch**.<br><br>Supported value inputs:<br><br>- **merchantId** and **acquirerId**<br>- **amount** and **currency**<br>- **merchantName**. |
| `mccs` | [`MccsRestriction1 \| undefined`](../../doc/models/mccs-restriction-1.md) | Optional | List of merchant category codes (MCCs) and the operation.<br><br>Supported operations: **anyMatch**, **noneMatch**. |
| `merchantNames` | [`MerchantNamesRestriction1 \| undefined`](../../doc/models/merchant-names-restriction-1.md) | Optional | List of names that will be compared to the merchant name according to the matching type.<br><br>Supported operations: **anyMatch**, **noneMatch**. |
| `merchants` | [`MerchantsRestriction1 \| undefined`](../../doc/models/merchants-restriction-1.md) | Optional | List of merchant ID and acquirer ID pairs, and the operation.<br><br>Supported operations: **anyMatch**, **noneMatch**. |
| `processingTypes` | [`ProcessingTypesRestriction1 \| undefined`](../../doc/models/processing-types-restriction-1.md) | Optional | List of processing types and the operation.<br><br>Supported operations: **anyMatch**, **noneMatch**. |
| `riskScores` | [`RiskScoresRestriction1 \| undefined`](../../doc/models/risk-scores-restriction-1.md) | Optional | Risk scores provided by specific sources. The same operation applies to all scores.<br><br>Current sources available: **visa**, **mastercard**<br><br>Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**. |
| `sameAmountRestriction` | [`SameAmountRestriction1 \| undefined`](../../doc/models/same-amount-restriction-1.md) | Optional | Checks if a user has recently sent the same amount of funds in multiple transfers.<br><br>To use this restriction, you must:<br><br>- Set the rule `type` to **velocity**.<br><br>- Specify a time `interval`.<br><br>- Specify a number of `matchingTransactions`.<br><br>Supported operation: **equals**. |
| `sameCounterpartyRestriction` | [`SameCounterpartyRestriction1 \| undefined`](../../doc/models/same-counterparty-restriction-1.md) | Optional | Checks if a user has recently made multiple transfers to the same counterparty.<br><br>To use this restriction, you must:<br><br>- Set the rule `type` to **velocity**.<br><br>- Specify a time `interval`.<br><br>- Specify a number of `matchingTransactions`.<br><br>Supported operations: **equals**. |
| `sourceAccountTypes` | [`SourceAccountTypesRestriction1 \| undefined`](../../doc/models/source-account-types-restriction-1.md) | Optional | Contains a list of source account types and how they must be evaluated.<br><br>Supported operations: **anyMatch**, **noneMatch**.<br><br>Supported value inputs:<br><br>- **balanceAccount**<br>- **businessAccount**. |
| `timeOfDay` | [`TimeOfDayRestriction1 \| undefined`](../../doc/models/time-of-day-restriction-1.md) | Optional | A start and end time in a time-only ISO-8601 extended offset format. Supported operations: **equals**, **notEquals**. |
| `tokenRequestors` | [`TokenRequestorsRestriction1 \| undefined`](../../doc/models/token-requestors-restriction-1.md) | Optional | List of token requestor IDs and the operation.<br><br>Supported operations: **anyMatch**, **noneMatch**. |
| `totalAmount` | [`TotalAmountRestriction1 \| undefined`](../../doc/models/total-amount-restriction-1.md) | Optional | The total amount and the operation.<br><br>Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**. |
| `walletProviderAccountScore` | [`WalletProviderAccountScoreRestriction2 \| undefined`](../../doc/models/wallet-provider-account-score-restriction-2.md) | Optional | Checks the wallet account score.<br><br>Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**. |
| `walletProviderDeviceScore` | [`WalletProviderDeviceScore2 \| undefined`](../../doc/models/wallet-provider-device-score-2.md) | Optional | Wallet Provider Device Score and the operation.<br><br>Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**. |
| `walletProviderDeviceType` | [`WalletProviderDeviceType2 \| undefined`](../../doc/models/wallet-provider-device-type-2.md) | Optional | Wallet Provider Device Type and the operation.<br><br>Supported operations: **anyMatch**, **noneMatch**.<br><br>Supported value inputs:<br><br>- **MOBILE_PHONE**<br><br>- **TABLET_OR_EREADER**<br><br>- **WATCH_OR_WRISTBAND**<br><br>- **WEARABLE**<br><br>- **CARD**<br><br>- **PC**<br><br>- **OTHER**<br><br>- **UNKNOWN** |

## Example

```ts
import {
  IdentificationTypeEnum,
  TransactionRuleRestrictions,
  ValueEnum,
} from 'adyen';

const transactionRuleRestrictions: TransactionRuleRestrictions = {
  activeNetworkTokens: {
    operation: 'operation0',
    value: 202,
  },
  brandVariants: {
    operation: 'operation4',
    value: [
      'value8',
      'value9'
    ],
  },
  counterpartyBank: {
    operation: 'operation2',
    value: [
      {
        country: 'country6',
        identification: 'identification0',
        identificationType: IdentificationTypeEnum.Bic,
      },
      {
        country: 'country6',
        identification: 'identification0',
        identificationType: IdentificationTypeEnum.Bic,
      }
    ],
  },
  counterpartyTypes: {
    operation: 'operation8',
    value: [
      ValueEnum.BalanceAccount
    ],
  },
  countries: {
    operation: 'operation0',
    value: [
      'value4'
    ],
  },
};
```


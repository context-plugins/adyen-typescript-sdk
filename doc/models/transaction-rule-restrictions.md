
# Transaction Rule Restrictions

*This model accepts additional fields of type unknown.*

## Structure

`TransactionRuleRestrictions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `activeNetworkTokens` | [`ActiveNetworkTokensRestriction \| undefined`](../../doc/models/active-network-tokens-restriction.md) | Optional | - |
| `brandVariants` | [`BrandVariantsRestriction \| undefined`](../../doc/models/brand-variants-restriction.md) | Optional | - |
| `counterpartyBank` | [`CounterpartyBankRestriction \| undefined`](../../doc/models/counterparty-bank-restriction.md) | Optional | - |
| `counterpartyTypes` | [`CounterpartyTypesRestriction \| undefined`](../../doc/models/counterparty-types-restriction.md) | Optional | - |
| `countries` | [`CountriesRestriction \| undefined`](../../doc/models/countries-restriction.md) | Optional | - |
| `dayOfWeek` | [`DayOfWeekRestriction \| undefined`](../../doc/models/day-of-week-restriction.md) | Optional | - |
| `differentCurrencies` | [`DifferentCurrenciesRestriction \| undefined`](../../doc/models/different-currencies-restriction.md) | Optional | - |
| `entryModes` | [`EntryModesRestriction \| undefined`](../../doc/models/entry-modes-restriction.md) | Optional | - |
| `internationalTransaction` | [`InternationalTransactionRestriction \| undefined`](../../doc/models/international-transaction-restriction.md) | Optional | - |
| `matchingTransactions` | [`MatchingTransactionsRestriction \| undefined`](../../doc/models/matching-transactions-restriction.md) | Optional | - |
| `matchingValues` | [`MatchingValuesRestriction \| undefined`](../../doc/models/matching-values-restriction.md) | Optional | - |
| `mccs` | [`MccsRestriction \| undefined`](../../doc/models/mccs-restriction.md) | Optional | - |
| `merchantNames` | [`MerchantNamesRestriction \| undefined`](../../doc/models/merchant-names-restriction.md) | Optional | - |
| `merchants` | [`MerchantsRestriction \| undefined`](../../doc/models/merchants-restriction.md) | Optional | - |
| `processingTypes` | [`ProcessingTypesRestriction \| undefined`](../../doc/models/processing-types-restriction.md) | Optional | - |
| `riskScores` | [`RiskScoresRestriction \| undefined`](../../doc/models/risk-scores-restriction.md) | Optional | - |
| `sameAmountRestriction` | [`SameAmountRestriction \| undefined`](../../doc/models/same-amount-restriction.md) | Optional | - |
| `sameCounterpartyRestriction` | [`SameAmountRestriction \| undefined`](../../doc/models/same-amount-restriction.md) | Optional | - |
| `sourceAccountTypes` | [`SourceAccountTypesRestriction \| undefined`](../../doc/models/source-account-types-restriction.md) | Optional | - |
| `timeOfDay` | [`TimeOfDayRestriction \| undefined`](../../doc/models/time-of-day-restriction.md) | Optional | - |
| `tokenRequestors` | [`TokenRequestorsRestriction \| undefined`](../../doc/models/token-requestors-restriction.md) | Optional | - |
| `totalAmount` | [`TotalAmountRestriction \| undefined`](../../doc/models/total-amount-restriction.md) | Optional | - |
| `walletProviderAccountScore` | [`WalletProviderAccountScoreRestriction \| undefined`](../../doc/models/wallet-provider-account-score-restriction.md) | Optional | - |
| `walletProviderDeviceScore` | [`WalletProviderAccountScoreRestriction \| undefined`](../../doc/models/wallet-provider-account-score-restriction.md) | Optional | - |
| `walletProviderDeviceType` | [`WalletProviderDeviceType \| undefined`](../../doc/models/wallet-provider-device-type.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  IdentificationType,
  TransactionRuleRestrictions,
  Value,
} from 'adyenlib';

const transactionRuleRestrictions: TransactionRuleRestrictions = {
  activeNetworkTokens: {
    operation: 'operation0',
    value: 202,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  brandVariants: {
    operation: 'operation4',
    value: [
      'value8',
      'value9'
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  counterpartyBank: {
    operation: 'operation2',
    value: [
      {
        country: 'country6',
        identification: 'identification0',
        identificationType: IdentificationType.Bic,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        country: 'country6',
        identification: 'identification0',
        identificationType: IdentificationType.Bic,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  counterpartyTypes: {
    operation: 'operation8',
    value: [
      Value.BalanceAccount
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  countries: {
    operation: 'operation0',
    value: [
      'value4'
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


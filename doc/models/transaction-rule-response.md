
# Transaction Rule Response

## Structure

`TransactionRuleResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionRule` | [`TransactionRule1 \| undefined`](../../doc/models/transaction-rule-1.md) | Optional | The transaction rule. |

## Example

```ts
import {
  DayOfWeekEnum,
  IdentificationTypeEnum,
  OutcomeTypeEnum,
  TransactionRuleResponse,
  Type131Enum,
  Type141Enum,
  UnitEnum,
  ValueEnum,
} from 'adyen';

const transactionRuleResponse: TransactionRuleResponse = {
  transactionRule: {
    description: 'description2',
    entityKey: {
      entityReference: 'entityReference2',
      entityType: 'entityType0',
    },
    interval: {
      type: Type131Enum.Monthly,
      dayOfMonth: 178,
      dayOfWeek: DayOfWeekEnum.Saturday,
      duration: {
        unit: UnitEnum.Weeks,
        value: 176,
      },
      timeOfDay: 'timeOfDay2',
      timeZone: 'timeZone4',
    },
    reference: 'reference2',
    ruleRestrictions: {
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
    },
    type: Type141Enum.MaxUsage,
    aggregationLevel: 'aggregationLevel4',
    endDate: 'endDate4',
    id: 'id2',
    outcomeType: OutcomeTypeEnum.EnforceSCA,
    overridesRule: 'overridesRule8',
  },
};
```


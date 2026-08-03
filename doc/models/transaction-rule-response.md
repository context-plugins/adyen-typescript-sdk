
# Transaction Rule Response

*This model accepts additional fields of type unknown.*

## Structure

`TransactionRuleResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionRule` | [`TransactionRule \| undefined`](../../doc/models/transaction-rule.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  DayOfWeek,
  IdentificationType,
  OutcomeType,
  TransactionRuleResponse,
  Type13,
  Type14,
  Unit,
  Value,
} from 'adyenlib';

const transactionRuleResponse: TransactionRuleResponse = {
  transactionRule: {
    description: 'description2',
    entityKey: {
      entityReference: 'entityReference2',
      entityType: 'entityType0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    interval: {
      type: Type13.Monthly,
      dayOfMonth: 178,
      dayOfWeek: DayOfWeek.Saturday,
      duration: {
        unit: Unit.Weeks,
        value: 176,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      timeOfDay: 'timeOfDay2',
      timeZone: 'timeZone4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    reference: 'reference2',
    ruleRestrictions: {
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
    },
    type: Type14.MaxUsage,
    aggregationLevel: 'aggregationLevel4',
    endDate: 'endDate4',
    id: 'id2',
    outcomeType: OutcomeType.EnforceSca,
    overridesRule: 'overridesRule8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


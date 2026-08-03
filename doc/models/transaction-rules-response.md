
# Transaction Rules Response

*This model accepts additional fields of type unknown.*

## Structure

`TransactionRulesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionRules` | [`TransactionRule[] \| undefined`](../../doc/models/transaction-rule.md) | Optional | List of transaction rules. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  DayOfWeek,
  IdentificationType,
  OutcomeType,
  TransactionRulesResponse,
  Type13,
  Type14,
  Unit,
  Value,
} from 'adyenlib';

const transactionRulesResponse: TransactionRulesResponse = {
  transactionRules: [
    {
      description: 'description8',
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
      reference: 'reference4',
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
      aggregationLevel: 'aggregationLevel0',
      endDate: 'endDate0',
      id: 'id8',
      outcomeType: OutcomeType.ScoreBased,
      overridesRule: 'overridesRule4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      description: 'description8',
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
      reference: 'reference4',
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
      aggregationLevel: 'aggregationLevel0',
      endDate: 'endDate0',
      id: 'id8',
      outcomeType: OutcomeType.ScoreBased,
      overridesRule: 'overridesRule4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


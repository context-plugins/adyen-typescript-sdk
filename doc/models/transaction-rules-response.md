
# Transaction Rules Response

## Structure

`TransactionRulesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionRules` | [`TransactionRule[] \| undefined`](../../doc/models/transaction-rule.md) | Optional | List of transaction rules. |

## Example

```ts
import {
  DayOfWeekEnum,
  IdentificationTypeEnum,
  OutcomeTypeEnum,
  TransactionRulesResponse,
  Type131Enum,
  Type141Enum,
  UnitEnum,
  ValueEnum,
} from 'adyen';

const transactionRulesResponse: TransactionRulesResponse = {
  transactionRules: [
    {
      description: 'description8',
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
      reference: 'reference4',
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
      aggregationLevel: 'aggregationLevel0',
      endDate: 'endDate0',
      id: 'id8',
      outcomeType: OutcomeTypeEnum.ScoreBased,
      overridesRule: 'overridesRule4',
    },
    {
      description: 'description8',
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
      reference: 'reference4',
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
      aggregationLevel: 'aggregationLevel0',
      endDate: 'endDate0',
      id: 'id8',
      outcomeType: OutcomeTypeEnum.ScoreBased,
      overridesRule: 'overridesRule4',
    }
  ],
};
```


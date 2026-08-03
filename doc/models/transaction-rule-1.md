
# Transaction Rule 1

The transaction rule.

*This model accepts additional fields of type unknown.*

## Structure

`TransactionRule1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `aggregationLevel` | `string \| undefined` | Optional | The level at which data must be accumulated, used in rules with `type` **velocity** or **maxUsage**. The level must be the [same or lower in hierarchy](https://docs.adyen.com/issuing/transaction-rules#accumulate-data) than the `entityKey`.<br><br>If not provided, by default, the rule will accumulate data at the **paymentInstrument** level.<br><br>Possible values: **paymentInstrument**, **paymentInstrumentGroup**, **balanceAccount**, **accountHolder**, **balancePlatform**. |
| `description` | `string` | Required | Your description for the transaction rule.<br><br>**Constraints**: *Maximum Length*: `300` |
| `endDate` | `string \| undefined` | Optional | The date when the rule will stop being evaluated, in ISO 8601 extended offset date-time format. For example, **2025-03-19T10:15:30+01:00**.<br><br>If not provided, the rule will be evaluated until the rule status is set to **inactive**. |
| `entityKey` | [`TransactionRuleEntityKey`](../../doc/models/transaction-rule-entity-key.md) | Required | - |
| `id` | `string \| undefined` | Optional | The unique identifier of the transaction rule. |
| `interval` | [`TransactionRuleInterval`](../../doc/models/transaction-rule-interval.md) | Required | - |
| `outcomeType` | [`OutcomeType \| undefined`](../../doc/models/outcome-type.md) | Optional | - |
| `overridesRule` | `string \| undefined` | Optional | The `id` of the transaction rule you want to override or skip for the specified `entityKey`. |
| `purpose` | [`Purpose \| undefined`](../../doc/models/purpose.md) | Optional | - |
| `reference` | `string` | Required | Your reference for the transaction rule.<br><br>**Constraints**: *Maximum Length*: `150` |
| `requestType` | [`RequestType \| undefined`](../../doc/models/request-type.md) | Optional | - |
| `ruleRestrictions` | [`TransactionRuleRestrictions`](../../doc/models/transaction-rule-restrictions.md) | Required | - |
| `score` | `number \| undefined` | Optional | A positive or negative score applied to the transaction if it meets the conditions of the rule. Required when `outcomeType` is **scoreBased**.  The value must be between **-100** and **100**. |
| `startDate` | `string \| undefined` | Optional | The date when the rule will start to be evaluated, in ISO 8601 extended offset date-time format. For example, **2025-03-19T10:15:30+01:00**.<br><br>If not provided when creating a transaction rule, the `startDate` is set to the date when the rule status is set to **active**. |
| `status` | [`Status14 \| undefined`](../../doc/models/status-14.md) | Optional | - |
| `type` | [`Type14`](../../doc/models/type-14.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  DayOfWeek,
  IdentificationType,
  OutcomeType,
  TransactionRule1,
  Type13,
  Type14,
  Unit,
  Value,
} from 'adyenlib';

const transactionRule1: TransactionRule1 = {
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
  reference: 'reference6',
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
  type: Type14.Bypass,
  aggregationLevel: 'aggregationLevel0',
  endDate: 'endDate0',
  id: 'id8',
  outcomeType: OutcomeType.EnforceSca,
  overridesRule: 'overridesRule4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


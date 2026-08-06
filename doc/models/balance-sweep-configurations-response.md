
# Balance Sweep Configurations Response

*This model accepts additional fields of type unknown.*

## Structure

`BalanceSweepConfigurationsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hasNext` | `boolean` | Required | Indicates whether there are more items on the next page. |
| `hasPrevious` | `boolean` | Required | Indicates whether there are more items on the previous page. |
| `sweeps` | [`SweepConfigurationV2[]`](../../doc/models/sweep-configuration-v2.md) | Required | List of sweeps associated with the balance account. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  BalanceSweepConfigurationsResponse,
  Category,
  Priority,
  Reason,
  Type6,
} from 'adyen';

const balanceSweepConfigurationsResponse: BalanceSweepConfigurationsResponse = {
  hasNext: false,
  hasPrevious: false,
  sweeps: [
    {
      counterparty: {
        balanceAccountId: 'balanceAccountId0',
        merchantAccount: 'merchantAccount0',
        transferInstrumentId: 'transferInstrumentId4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      currency: 'currency2',
      id: 'id2',
      schedule: {
        type: Type6.Weekly,
        cronExpression: 'cronExpression4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      category: Category.PlatformPayment,
      description: 'description2',
      priorities: [
        Priority.Regular,
        Priority.Wire,
        Priority.CrossBorder
      ],
      reason: Reason.AccountHierarchyNotActive,
      reasonDetail: 'reasonDetail8',
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


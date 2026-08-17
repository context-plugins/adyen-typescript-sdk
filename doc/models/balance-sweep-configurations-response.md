
# Balance Sweep Configurations Response

## Structure

`BalanceSweepConfigurationsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hasNext` | `boolean` | Required | Indicates whether there are more items on the next page. |
| `hasPrevious` | `boolean` | Required | Indicates whether there are more items on the previous page. |
| `sweeps` | [`SweepConfigurationV2[]`](../../doc/models/sweep-configuration-v2.md) | Required | List of sweeps associated with the balance account. |

## Example

```ts
import {
  BalanceSweepConfigurationsResponse,
  Category1Enum,
  Priority1Enum,
  Type62Enum,
  Type72Enum,
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
      },
      currency: 'currency2',
      id: '',
      schedule: {
        type: Type62Enum.Weekly,
        cronExpression: 'cronExpression4',
      },
      category: Category1Enum.PlatformPayment,
      description: 'description2',
      priorities: [
        Priority1Enum.Regular,
        Priority1Enum.Wire,
        Priority1Enum.CrossBorder
      ],
      type: Type72Enum.Push,
    }
  ],
};
```


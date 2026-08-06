
# Amount Adjustment

*This model accepts additional fields of type unknown.*

## Structure

`AmountAdjustment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount5 \| undefined`](../../doc/models/amount-5.md) | Optional | - |
| `amountAdjustmentType` | [`AmountAdjustmentType \| undefined`](../../doc/models/amount-adjustment-type.md) | Optional | - |
| `basepoints` | `number \| undefined` | Optional | The basepoints associated with the applied markup. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AmountAdjustment, AmountAdjustmentType } from 'adyen';

const amountAdjustment: AmountAdjustment = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  amountAdjustmentType: AmountAdjustmentType.Exchange,
  basepoints: 76,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


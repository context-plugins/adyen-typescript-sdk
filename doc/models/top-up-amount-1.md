
# Top Up Amount 1

The currency and value to be added to the balance account, specified in minor units. This can be a fixed amount or a target amount.

*This model accepts additional fields of type unknown.*

## Structure

`TopUpAmount1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fixed` | [`Fixed \| undefined`](../../doc/models/fixed.md) | Optional | - |
| `target` | [`Target5 \| undefined`](../../doc/models/target-5.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TopUpAmount1 } from 'adyenlib';

const topUpAmount1: TopUpAmount1 = {
  fixed: {
    currency: 'currency0',
    value: BigInt(164),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  target: {
    currency: 'currency2',
    value: BigInt(188),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


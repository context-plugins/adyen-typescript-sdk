
# Top Up Amount

*This model accepts additional fields of type unknown.*

## Structure

`TopUpAmount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fixed` | [`Fixed \| undefined`](../../doc/models/fixed.md) | Optional | - |
| `target` | [`Target5 \| undefined`](../../doc/models/target-5.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TopUpAmount } from 'adyen';

const topUpAmount: TopUpAmount = {
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


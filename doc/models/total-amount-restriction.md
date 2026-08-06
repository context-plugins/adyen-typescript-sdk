
# Total Amount Restriction

*This model accepts additional fields of type unknown.*

## Structure

`TotalAmountRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value7 \| undefined`](../../doc/models/value-7.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TotalAmountRestriction } from 'adyen';

const totalAmountRestriction: TotalAmountRestriction = {
  operation: 'operation4',
  value: {
    currency: 'currency2',
    value: BigInt(128),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


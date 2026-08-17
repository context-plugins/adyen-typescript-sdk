
# Total Amount Restriction 1

The total amount and the operation.

Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**.

## Structure

`TotalAmountRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | The amount value and currency. |

## Example

```ts
import { TotalAmountRestriction1 } from 'adyen';

const totalAmountRestriction1: TotalAmountRestriction1 = {
  operation: 'operation0',
  value: {
    currency: 'currency2',
    value: BigInt(128),
  },
};
```


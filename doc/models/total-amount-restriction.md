
# Total Amount Restriction

## Structure

`TotalAmountRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | The amount value and currency. |

## Example

```ts
import { TotalAmountRestriction } from 'adyen';

const totalAmountRestriction: TotalAmountRestriction = {
  operation: 'operation4',
  value: {
    currency: 'currency2',
    value: BigInt(128),
  },
};
```


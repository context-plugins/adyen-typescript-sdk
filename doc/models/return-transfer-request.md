
# Return Transfer Request

## Structure

`ReturnTransferRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | Contains information about the amount to be returned. |
| `reference` | `string \| undefined` | Optional | Your internal reference for the return. If you don't provide this in the request, Adyen generates a unique reference. This reference is used in all communication with you about the instruction status.<br><br>We recommend using a unique value per instruction.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br><br>**Constraints**: *Maximum Length*: `80` |

## Example

```ts
import { ReturnTransferRequest } from 'adyen';

const returnTransferRequest: ReturnTransferRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  reference: 'reference2',
};
```


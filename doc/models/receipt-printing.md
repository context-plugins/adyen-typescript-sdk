
# Receipt Printing

*This model accepts additional fields of type unknown.*

## Structure

`ReceiptPrinting`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantApproved` | `boolean \| undefined` | Optional | Print a merchant receipt when the payment is approved. |
| `merchantCancelled` | `boolean \| undefined` | Optional | Print a merchant receipt when the transaction is cancelled. |
| `merchantCaptureApproved` | `boolean \| undefined` | Optional | Print a merchant receipt when capturing the payment is approved. |
| `merchantCaptureRefused` | `boolean \| undefined` | Optional | Print a merchant receipt when capturing the payment is refused. |
| `merchantRefundApproved` | `boolean \| undefined` | Optional | Print a merchant receipt when the refund is approved. |
| `merchantRefundRefused` | `boolean \| undefined` | Optional | Print a merchant receipt when the refund is refused. |
| `merchantRefused` | `boolean \| undefined` | Optional | Print a merchant receipt when the payment is refused. |
| `merchantVoid` | `boolean \| undefined` | Optional | Print a merchant receipt when a previous transaction is voided. |
| `shopperApproved` | `boolean \| undefined` | Optional | Print a shopper receipt when the payment is approved. |
| `shopperCancelled` | `boolean \| undefined` | Optional | Print a shopper receipt when the transaction is cancelled. |
| `shopperCaptureApproved` | `boolean \| undefined` | Optional | Print a shopper receipt when capturing the payment is approved. |
| `shopperCaptureRefused` | `boolean \| undefined` | Optional | Print a shopper receipt when capturing the payment is refused. |
| `shopperRefundApproved` | `boolean \| undefined` | Optional | Print a shopper receipt when the refund is approved. |
| `shopperRefundRefused` | `boolean \| undefined` | Optional | Print a shopper receipt when the refund is refused. |
| `shopperRefused` | `boolean \| undefined` | Optional | Print a shopper receipt when the payment is refused. |
| `shopperVoid` | `boolean \| undefined` | Optional | Print a shopper receipt when a previous transaction is voided. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReceiptPrinting } from 'adyen';

const receiptPrinting: ReceiptPrinting = {
  merchantApproved: false,
  merchantCancelled: false,
  merchantCaptureApproved: false,
  merchantCaptureRefused: false,
  merchantRefundApproved: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


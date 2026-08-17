
# Update Payment Link Request

## Structure

`UpdatePaymentLinkRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required, Constant | Status of the payment link. Possible values:<br><br>* **expired**<br><br>**Value**: `'expired'` |

## Example

```ts
import { UpdatePaymentLinkRequest } from 'adyen';

const updatePaymentLinkRequest: UpdatePaymentLinkRequest = {
  status: 'expired',
};
```


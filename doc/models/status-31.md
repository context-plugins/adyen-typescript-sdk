
# Status 31

Status of the payment link. Possible values:

* **active**: The link can be used to make payments.
* **expired**: The expiry date for the payment link has passed. Shoppers can no longer use the link to make payments.
* **completed**: The shopper completed the payment.
* **paymentPending**: The shopper is in the process of making the payment. Applies to payment methods with an asynchronous flow.

## Enumeration

`Status31`

## Fields

| Name |
|  --- |
| `Active` |
| `Completed` |
| `Expired` |
| `Paid` |
| `PaymentPending` |

## Example

```ts
import { Status31 } from 'adyenlib';

const status31 = Status31.PaymentPending;
```


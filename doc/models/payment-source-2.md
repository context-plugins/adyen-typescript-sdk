
# Payment Source 2

The source used to obtain the payload. Possible values: `qr`, `redirect`, and `pushNotification`.

## Enumeration

`PaymentSource2`

## Fields

| Name |
|  --- |
| `Redirect` |
| `Qr` |
| `PushNotification` |

## Example

```ts
import { PaymentSource2 } from 'adyen';

const paymentSource2 = PaymentSource2.PushNotification;
```


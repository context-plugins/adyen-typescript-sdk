
# Payment Source 2 Enum

The source used to obtain the payload. Possible values: `qr`, `redirect`, and `pushNotification`.

## Enumeration

`PaymentSource2Enum`

## Fields

| Name |
|  --- |
| `Redirect` |
| `Qr` |
| `PushNotification` |

## Example

```ts
import { PaymentSource2Enum } from 'adyen';

const paymentSource2 = PaymentSource2Enum.PushNotification;
```


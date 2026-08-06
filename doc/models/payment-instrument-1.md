
# Payment Instrument 1

Sets the allowed payment instrument for Pay at table transactions.  Can be: **cash** or **card**. If not set, the terminal presents both options.

## Enumeration

`PaymentInstrument1`

## Fields

| Name |
|  --- |
| `Cash` |
| `Card` |

## Example

```ts
import { PaymentInstrument1 } from 'adyen';

const paymentInstrument1 = PaymentInstrument1.Cash;
```


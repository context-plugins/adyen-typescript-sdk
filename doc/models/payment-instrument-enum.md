
# Payment Instrument Enum

Sets the allowed payment instrument for Pay at table transactions.  Can be: **cash** or **card**. If not set, the terminal presents both options.

## Enumeration

`PaymentInstrumentEnum`

## Fields

| Name |
|  --- |
| `Cash` |
| `Card` |

## Example

```ts
import { PaymentInstrumentEnum } from 'adyen';

const paymentInstrument = PaymentInstrumentEnum.Cash;
```


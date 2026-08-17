
# Pay at Table

## Structure

`PayAtTable`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authenticationMethod` | [`AuthenticationMethodEnum \| undefined`](../../doc/models/authentication-method-enum.md) | Optional | Allowed authentication methods: Magswipe, Manual Entry. |
| `enablePayAtTable` | `boolean \| undefined` | Optional | Enable Pay at table. |
| `paymentInstrument` | [`PaymentInstrumentEnum \| null \| undefined`](../../doc/models/payment-instrument-enum.md) | Optional | Sets the allowed payment instrument for Pay at table transactions.  Can be: **cash** or **card**. If not set, the terminal presents both options. |

## Example

```ts
import {
  AuthenticationMethodEnum,
  PayAtTable,
  PaymentInstrumentEnum,
} from 'adyen';

const payAtTable: PayAtTable = {
  authenticationMethod: AuthenticationMethodEnum.MAGSWIPE,
  enablePayAtTable: false,
  paymentInstrument: PaymentInstrumentEnum.Cash,
};
```


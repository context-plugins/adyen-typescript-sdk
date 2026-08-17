
# Pay at Table 1

Settings for [Pay-at-table](https://docs.adyen.com/point-of-sale/pay-at-x) features.

## Structure

`PayAtTable1`

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
  PayAtTable1,
  PaymentInstrumentEnum,
} from 'adyen';

const payAtTable1: PayAtTable1 = {
  authenticationMethod: AuthenticationMethodEnum.MAGSWIPE,
  enablePayAtTable: false,
  paymentInstrument: PaymentInstrumentEnum.Cash,
};
```


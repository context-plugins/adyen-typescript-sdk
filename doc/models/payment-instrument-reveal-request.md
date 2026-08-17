
# Payment Instrument Reveal Request

## Structure

`PaymentInstrumentRevealRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `encryptedKey` | `string` | Required | The symmetric session key that you encrypted with the [public key](https://docs.adyen.com/api-explorer/balanceplatform/2/get/publicKey) that you received from Adyen. |
| `paymentInstrumentId` | `string` | Required | The unique identifier of the payment instrument, which is the card for which you are managing the PIN. |

## Example

```ts
import { PaymentInstrumentRevealRequest } from 'adyen';

const paymentInstrumentRevealRequest: PaymentInstrumentRevealRequest = {
  encryptedKey: 'encryptedKey4',
  paymentInstrumentId: 'paymentInstrumentId2',
};
```


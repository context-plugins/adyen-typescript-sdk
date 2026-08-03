
# Payment Instrument Reveal Request

*This model accepts additional fields of type unknown.*

## Structure

`PaymentInstrumentRevealRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `encryptedKey` | `string` | Required | The symmetric session key that you encrypted with the [public key](https://docs.adyen.com/api-explorer/balanceplatform/2/get/publicKey) that you received from Adyen. |
| `paymentInstrumentId` | `string` | Required | The unique identifier of the payment instrument, which is the card for which you are managing the PIN. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentInstrumentRevealRequest } from 'adyenlib';

const paymentInstrumentRevealRequest: PaymentInstrumentRevealRequest = {
  encryptedKey: 'encryptedKey4',
  paymentInstrumentId: 'paymentInstrumentId2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


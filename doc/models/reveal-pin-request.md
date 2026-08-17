
# Reveal Pin Request

## Structure

`RevealPinRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `encryptedKey` | `string` | Required | The symmetric session key that you encrypted with the [public key](https://docs.adyen.com/api-explorer/balanceplatform/2/get/publicKey) that you received from Adyen. |
| `paymentInstrumentId` | `string` | Required | The unique identifier of the payment instrument, which is the card for which you are managing the PIN. |

## Example

```ts
import { RevealPinRequest } from 'adyen';

const revealPinRequest: RevealPinRequest = {
  encryptedKey: 'encryptedKey6',
  paymentInstrumentId: 'paymentInstrumentId2',
};
```


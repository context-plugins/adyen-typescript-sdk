
# Reveal Pin Request

*This model accepts additional fields of type unknown.*

## Structure

`RevealPinRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `encryptedKey` | `string` | Required | The symmetric session key that you encrypted with the [public key](https://docs.adyen.com/api-explorer/balanceplatform/2/get/publicKey) that you received from Adyen. |
| `paymentInstrumentId` | `string` | Required | The unique identifier of the payment instrument, which is the card for which you are managing the PIN. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RevealPinRequest } from 'adyenlib';

const revealPinRequest: RevealPinRequest = {
  encryptedKey: 'encryptedKey6',
  paymentInstrumentId: 'paymentInstrumentId2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


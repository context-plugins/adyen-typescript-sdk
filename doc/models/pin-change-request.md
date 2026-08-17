
# Pin Change Request

## Structure

`PinChangeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `encryptedKey` | `string` | Required | The symmetric session key that you encrypted with the [public key](https://docs.adyen.com/api-explorer/balanceplatform/2/get/publicKey) that you received from Adyen. |
| `encryptedPinBlock` | `string` | Required | The encrypted [PIN block](https://www.pcisecuritystandards.org/glossary/pin-block). |
| `paymentInstrumentId` | `string` | Required | The unique identifier of the payment instrument, which is the card for which you are managing the PIN. |
| `token` | `string` | Required | The 16-digit token that you used to generate the `encryptedPinBlock`. |

## Example

```ts
import { PinChangeRequest } from 'adyen';

const pinChangeRequest: PinChangeRequest = {
  encryptedKey: 'encryptedKey0',
  encryptedPinBlock: 'encryptedPinBlock2',
  paymentInstrumentId: 'paymentInstrumentId6',
  token: 'token2',
};
```


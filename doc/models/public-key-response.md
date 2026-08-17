
# Public Key Response

## Structure

`PublicKeyResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publicKey` | `string` | Required | The public key you need for encrypting a symmetric session key. |
| `publicKeyExpiryDate` | `string` | Required | The expiry date of the public key. |

## Example

```ts
import { PublicKeyResponse } from 'adyen';

const publicKeyResponse: PublicKeyResponse = {
  publicKey: 'publicKey4',
  publicKeyExpiryDate: 'publicKeyExpiryDate2',
};
```


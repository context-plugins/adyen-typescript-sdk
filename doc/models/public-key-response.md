
# Public Key Response

*This model accepts additional fields of type unknown.*

## Structure

`PublicKeyResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publicKey` | `string` | Required | The public key you need for encrypting a symmetric session key. |
| `publicKeyExpiryDate` | `string` | Required | The expiry date of the public key. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PublicKeyResponse } from 'adyen';

const publicKeyResponse: PublicKeyResponse = {
  publicKey: 'publicKey4',
  publicKeyExpiryDate: 'publicKeyExpiryDate2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


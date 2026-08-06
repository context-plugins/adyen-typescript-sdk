
# Security Trailer

It contains information related to the security of the message.
SecurityTrailer as used by Adyen.

*This model accepts additional fields of type unknown.*

## Structure

`SecurityTrailer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `adyenCryptoVersion` | `number` | Required | - |
| `keyIdentifier` | `string` | Required | **Constraints**: *Pattern*: `^.+$` |
| `keyVersion` | `number` | Required | - |
| `nonce` | `string` | Required | **Constraints**: *Pattern*: `^.+$` |
| `hmac` | `string` | Required | **Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SecurityTrailer } from 'adyen';

const securityTrailer: SecurityTrailer = {
  adyenCryptoVersion: 88,
  keyIdentifier: 'KeyIdentifier8',
  keyVersion: 22,
  nonce: 'Nonce0',
  hmac: 'Hmac2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


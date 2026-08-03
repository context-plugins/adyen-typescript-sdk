
# File 3

For `eap` **tls**. The RSA private key for the client. Include the lines BEGIN RSA PRIVATE KEY and END RSA PRIVATE KEY.

*This model accepts additional fields of type unknown.*

## Structure

`File3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `string` | Required | The certificate content converted to a Base64-encoded string. |
| `name` | `string` | Required | The name of the certificate. Must be unique across Wi-Fi profiles. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { File3 } from 'adyenlib';

const file3: File3 = {
  data: 'data8',
  name: 'name8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


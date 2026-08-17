
# File 3

For `eap` **tls**. The RSA private key for the client. Include the lines BEGIN RSA PRIVATE KEY and END RSA PRIVATE KEY.

## Structure

`File3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `string` | Required | The certificate content converted to a Base64-encoded string. |
| `name` | `string` | Required | The name of the certificate. Must be unique across Wi-Fi profiles. |

## Example

```ts
import { File3 } from 'adyen';

const file3: File3 = {
  data: 'data8',
  name: 'name8',
};
```


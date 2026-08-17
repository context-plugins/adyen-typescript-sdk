
# File 4

For `eap` **tls**. The EAP intermediate certificate.

## Structure

`File4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `string` | Required | The certificate content converted to a Base64-encoded string. |
| `name` | `string` | Required | The name of the certificate. Must be unique across Wi-Fi profiles. |

## Example

```ts
import { File4 } from 'adyen';

const file4: File4 = {
  data: 'data4',
  name: 'name4',
};
```


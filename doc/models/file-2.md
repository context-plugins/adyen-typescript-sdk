
# File 2

For `eap` **tls**. The certificate chain for the terminals. All terminals in the same network will use the same EAP client certificate.

*This model accepts additional fields of type unknown.*

## Structure

`File2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `string` | Required | The certificate content converted to a Base64-encoded string. |
| `name` | `string` | Required | The name of the certificate. Must be unique across Wi-Fi profiles. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { File2 } from 'adyen';

const file2: File2 = {
  data: 'data2',
  name: 'name2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


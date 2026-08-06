
# File 4

For `eap` **tls**. The EAP intermediate certificate.

*This model accepts additional fields of type unknown.*

## Structure

`File4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `string` | Required | The certificate content converted to a Base64-encoded string. |
| `name` | `string` | Required | The name of the certificate. Must be unique across Wi-Fi profiles. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { File4 } from 'adyen';

const file4: File4 = {
  data: 'data4',
  name: 'name4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


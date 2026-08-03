
# File

*This model accepts additional fields of type unknown.*

## Structure

`File`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `string` | Required | The certificate content converted to a Base64-encoded string. |
| `name` | `string` | Required | The name of the certificate. Must be unique across Wi-Fi profiles. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { File } from 'adyenlib';

const file: File = {
  data: 'data0',
  name: 'name0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


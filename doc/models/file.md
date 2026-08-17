
# File

## Structure

`File`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `string` | Required | The certificate content converted to a Base64-encoded string. |
| `name` | `string` | Required | The name of the certificate. Must be unique across Wi-Fi profiles. |

## Example

```ts
import { File } from 'adyen';

const file: File = {
  data: 'data0',
  name: 'name0',
};
```


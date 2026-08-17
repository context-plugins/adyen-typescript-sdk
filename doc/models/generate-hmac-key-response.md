
# Generate Hmac Key Response

## Structure

`GenerateHmacKeyResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hmacKey` | `string` | Required | The HMAC key generated for this webhook. |

## Example

```ts
import { GenerateHmacKeyResponse } from 'adyen';

const generateHmacKeyResponse: GenerateHmacKeyResponse = {
  hmacKey: 'hmacKey6',
};
```


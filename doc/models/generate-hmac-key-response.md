
# Generate Hmac Key Response

*This model accepts additional fields of type unknown.*

## Structure

`GenerateHmacKeyResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hmacKey` | `string` | Required | The HMAC key generated for this webhook. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GenerateHmacKeyResponse } from 'adyenlib';

const generateHmacKeyResponse: GenerateHmacKeyResponse = {
  hmacKey: 'hmacKey6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


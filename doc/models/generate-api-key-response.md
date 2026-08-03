
# Generate Api Key Response

*This model accepts additional fields of type unknown.*

## Structure

`GenerateApiKeyResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Required | The generated API key. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GenerateApiKeyResponse } from 'adyenlib';

const generateApiKeyResponse: GenerateApiKeyResponse = {
  apiKey: 'apiKey2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


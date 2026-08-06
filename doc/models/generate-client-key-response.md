
# Generate Client Key Response

*This model accepts additional fields of type unknown.*

## Structure

`GenerateClientKeyResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientKey` | `string` | Required | Generated client key |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GenerateClientKeyResponse } from 'adyen';

const generateClientKeyResponse: GenerateClientKeyResponse = {
  clientKey: 'clientKey8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


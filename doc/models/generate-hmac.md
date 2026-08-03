
# Generate Hmac

*This model accepts additional fields of type unknown.*

## Structure

`GenerateHmac`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GenerateHmac } from 'adyenlib';

const generateHmac: GenerateHmac = {
  href: 'href6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


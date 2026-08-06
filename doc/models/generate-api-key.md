
# Generate Api Key

*This model accepts additional fields of type unknown.*

## Structure

`GenerateApiKey`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GenerateApiKey } from 'adyen';

const generateApiKey: GenerateApiKey = {
  href: 'href6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


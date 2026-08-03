
# Generate Client Key

*This model accepts additional fields of type unknown.*

## Structure

`GenerateClientKey`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GenerateClientKey } from 'adyenlib';

const generateClientKey: GenerateClientKey = {
  href: 'href4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


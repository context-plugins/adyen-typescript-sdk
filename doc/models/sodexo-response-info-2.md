
# Sodexo Response Info 2

**sodexo** details

*This model accepts additional fields of type unknown.*

## Structure

`SodexoResponseInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantContactPhone` | `string \| undefined` | Optional | Sodexo merchantContactPhone |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SodexoResponseInfo2 } from 'adyenlib';

const sodexoResponseInfo2: SodexoResponseInfo2 = {
  merchantContactPhone: 'merchantContactPhone0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


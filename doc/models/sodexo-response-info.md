
# Sodexo Response Info

*This model accepts additional fields of type unknown.*

## Structure

`SodexoResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantContactPhone` | `string \| undefined` | Optional | Sodexo merchantContactPhone |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SodexoResponseInfo } from 'adyen';

const sodexoResponseInfo: SodexoResponseInfo = {
  merchantContactPhone: 'merchantContactPhone8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


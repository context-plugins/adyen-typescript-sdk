
# Sodexo Info

*This model accepts additional fields of type unknown.*

## Structure

`SodexoInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantContactPhone` | `string` | Required | Sodexo merchantContactPhone |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SodexoInfo } from 'adyen';

const sodexoInfo: SodexoInfo = {
  merchantContactPhone: 'merchantContactPhone4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


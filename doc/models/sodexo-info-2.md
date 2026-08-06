
# Sodexo Info 2

Details to provide if `type` is **sodexo**.

*This model accepts additional fields of type unknown.*

## Structure

`SodexoInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantContactPhone` | `string` | Required | Sodexo merchantContactPhone |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SodexoInfo2 } from 'adyen';

const sodexoInfo2: SodexoInfo2 = {
  merchantContactPhone: 'merchantContactPhone6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


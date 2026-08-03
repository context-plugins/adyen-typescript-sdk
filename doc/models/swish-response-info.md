
# Swish Response Info

*This model accepts additional fields of type unknown.*

## Structure

`SwishResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `swishNumber` | `string \| undefined` | Optional | Swish number. Format: 10 digits without spaces. For example, **1231111111**.<br><br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SwishResponseInfo } from 'adyenlib';

const swishResponseInfo: SwishResponseInfo = {
  swishNumber: 'swishNumber4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


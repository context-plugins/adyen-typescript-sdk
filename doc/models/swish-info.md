
# Swish Info

*This model accepts additional fields of type unknown.*

## Structure

`SwishInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `swishNumber` | `string` | Required | Swish number. Format: 10 digits without spaces. For example, **1231111111**.<br><br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SwishInfo } from 'adyen';

const swishInfo: SwishInfo = {
  swishNumber: 'swishNumber8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


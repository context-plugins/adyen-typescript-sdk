
# Swish Response Info 2

**swish** or its variant details

*This model accepts additional fields of type unknown.*

## Structure

`SwishResponseInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `swishNumber` | `string \| undefined` | Optional | Swish number. Format: 10 digits without spaces. For example, **1231111111**.<br><br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SwishResponseInfo2 } from 'adyen';

const swishResponseInfo2: SwishResponseInfo2 = {
  swishNumber: 'swishNumber0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


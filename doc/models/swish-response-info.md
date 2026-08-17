
# Swish Response Info

## Structure

`SwishResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `swishNumber` | `string \| undefined` | Optional | Swish number. Format: 10 digits without spaces. For example, **1231111111**.<br><br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10` |

## Example

```ts
import { SwishResponseInfo } from 'adyen';

const swishResponseInfo: SwishResponseInfo = {
  swishNumber: 'swishNumber4',
};
```


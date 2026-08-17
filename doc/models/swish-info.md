
# Swish Info

## Structure

`SwishInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `swishNumber` | `string` | Required | Swish number. Format: 10 digits without spaces. For example, **1231111111**.<br><br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10` |

## Example

```ts
import { SwishInfo } from 'adyen';

const swishInfo: SwishInfo = {
  swishNumber: 'swishNumber8',
};
```


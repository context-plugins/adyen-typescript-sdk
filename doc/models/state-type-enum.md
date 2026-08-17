
# State Type Enum

The state to be updated.

> Permitted values are: `Processing`, `Payout`

## Enumeration

`StateTypeEnum`

## Fields

| Name |
|  --- |
| `LimitedPayout` |
| `LimitedProcessing` |
| `LimitlessPayout` |
| `LimitlessProcessing` |
| `Payout` |
| `Processing` |

## Example

```ts
import { StateTypeEnum } from 'adyen';

const stateType = StateTypeEnum.LimitlessPayout;
```


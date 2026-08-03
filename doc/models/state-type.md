
# State Type

The state to be updated.

> Permitted values are: `Processing`, `Payout`

## Enumeration

`StateType`

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
import { StateType } from 'adyenlib';

const stateType = StateType.LimitlessPayout;
```



# Local Time 2

The time when the payout funds are settled in your user's transfer instrument.

## Structure

`LocalTime2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hour` | `number \| undefined` | Optional | - |
| `minute` | `number \| undefined` | Optional | - |
| `nano` | `number \| undefined` | Optional | - |
| `second` | `number \| undefined` | Optional | - |

## Example

```ts
import { LocalTime2 } from 'adyen';

const localTime2: LocalTime2 = {
  hour: 94,
  minute: 96,
  nano: 120,
  second: 158,
};
```


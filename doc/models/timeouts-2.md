
# Timeouts 2

Settings for device [time-outs](https://docs.adyen.com/point-of-sale/pos-timeouts#device-time-out).

## Structure

`Timeouts2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fromActiveToSleep` | `number \| undefined` | Optional | Indicates the number of seconds of inactivity after which the terminal display goes into sleep mode. |

## Example

```ts
import { Timeouts2 } from 'adyen';

const timeouts2: Timeouts2 = {
  fromActiveToSleep: 218,
};
```


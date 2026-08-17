
# Hardware 1

Settings for terminal hardware features.

## Structure

`Hardware1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayMaximumBackLight` | `number \| undefined` | Optional | The brightness of the display when the terminal is being used, expressed as a percentage. |
| `resetTotalsHour` | `number \| undefined` | Optional | The hour of the day when the terminal is set to reset the Totals report. By default, the reset hour is at 6:00 AM in the timezone of the terminal. Minimum value: 0, maximum value: 23. |
| `restartHour` | `number \| undefined` | Optional | The hour of the day when the terminal is set to reboot to apply the configuration and software updates. By default, the restart hour is at 6:00 AM in the timezone of the terminal. Minimum value: 0, maximum value: 23. |

## Example

```ts
import { Hardware1 } from 'adyen';

const hardware1: Hardware1 = {
  displayMaximumBackLight: 52,
  resetTotalsHour: 194,
  restartHour: 172,
};
```


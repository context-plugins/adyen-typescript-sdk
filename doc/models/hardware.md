
# Hardware

*This model accepts additional fields of type unknown.*

## Structure

`Hardware`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayMaximumBackLight` | `number \| undefined` | Optional | The brightness of the display when the terminal is being used, expressed as a percentage. |
| `resetTotalsHour` | `number \| undefined` | Optional | The hour of the day when the terminal is set to reset the Totals report. By default, the reset hour is at 6:00 AM in the timezone of the terminal. Minimum value: 0, maximum value: 23. |
| `restartHour` | `number \| undefined` | Optional | The hour of the day when the terminal is set to reboot to apply the configuration and software updates. By default, the restart hour is at 6:00 AM in the timezone of the terminal. Minimum value: 0, maximum value: 23. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Hardware } from 'adyen';

const hardware: Hardware = {
  displayMaximumBackLight: 142,
  resetTotalsHour: 132,
  restartHour: 110,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


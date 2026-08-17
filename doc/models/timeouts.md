
# Timeouts

## Structure

`Timeouts`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fromActiveToSleep` | `number \| undefined` | Optional | Indicates the number of seconds of inactivity after which the terminal display goes into sleep mode. |

## Example

```ts
import { Timeouts } from 'adyen';

const timeouts: Timeouts = {
  fromActiveToSleep: 94,
};
```



# Local Time

## Structure

`LocalTime`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hour` | `number \| undefined` | Optional | - |
| `minute` | `number \| undefined` | Optional | - |
| `nano` | `number \| undefined` | Optional | - |
| `second` | `number \| undefined` | Optional | - |

## Example

```ts
import { LocalTime } from 'adyen';

const localTime: LocalTime = {
  hour: 74,
  minute: 76,
  nano: 100,
  second: 138,
};
```


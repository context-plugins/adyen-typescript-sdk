
# Duration

## Structure

`Duration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `unit` | [`UnitEnum \| undefined`](../../doc/models/unit-enum.md) | Optional | The unit of time. You can only use **minutes** and **hours** if the `interval.type` is **sliding**.<br><br>Possible values: **minutes**, **hours**, **days**, **weeks**, or **months** |
| `value` | `number \| undefined` | Optional | The length of time by the unit. For example, 5 days.<br><br>The maximum duration is 90 days or an equivalent in other units. For example, 3 months. |

## Example

```ts
import { Duration, UnitEnum } from 'adyen';

const duration: Duration = {
  unit: UnitEnum.Weeks,
  value: 176,
};
```


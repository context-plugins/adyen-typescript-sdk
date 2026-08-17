
# Unit Enum

The unit of time. You can only use **minutes** and **hours** if the `interval.type` is **sliding**.

Possible values: **minutes**, **hours**, **days**, **weeks**, or **months**

## Enumeration

`UnitEnum`

## Fields

| Name |
|  --- |
| `Days` |
| `Hours` |
| `Minutes` |
| `Months` |
| `Weeks` |

## Example

```ts
import { UnitEnum } from 'adyen';

const unit = UnitEnum.Months;
```


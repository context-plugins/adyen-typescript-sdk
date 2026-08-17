
# Status 16 Enum

The new status of the network token. Possible values: **active**, **suspended**, **closed**. The **closed** status is final and cannot be changed.

## Enumeration

`Status16Enum`

## Fields

| Name |
|  --- |
| `Active` |
| `Suspended` |
| `Closed` |

## Example

```ts
import { Status16Enum } from 'adyen';

const status16 = Status16Enum.Active;
```


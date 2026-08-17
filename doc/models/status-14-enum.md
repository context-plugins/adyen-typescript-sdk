
# Status 14 Enum

The current status of the grant. Possible values: **Pending**, **Active**, **Repaid**, **WrittenOff**, **Failed**, **Revoked**.

## Enumeration

`Status14Enum`

## Fields

| Name |
|  --- |
| `Pending` |
| `Active` |
| `Repaid` |
| `Failed` |
| `WrittenOff` |
| `Revoked` |

## Example

```ts
import { Status14Enum } from 'adyen';

const status14 = Status14Enum.WrittenOff;
```


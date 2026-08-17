
# Type 213 Enum

The type of legal entity.

Possible values: **individual**, **organization**, **soleProprietorship**, or **trust**.

## Enumeration

`Type213Enum`

## Fields

| Name |
|  --- |
| `Individual` |
| `Organization` |
| `SoleProprietorship` |
| `Trust` |
| `UnincorporatedPartnership` |

## Example

```ts
import { Type213Enum } from 'adyen';

const type213 = Type213Enum.UnincorporatedPartnership;
```


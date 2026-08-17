
# Type 182 Enum

The type of legal entity.

Possible values: **individual**, **organization**, **soleProprietorship**, or **trust**.

## Enumeration

`Type182Enum`

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
import { Type182Enum } from 'adyen';

const type182 = Type182Enum.SoleProprietorship;
```



# Type 110

The type of entity that owns the bank account or card.

Possible values: **individual**, **organization**, or **unknown**.

Required when `category` is **card**. In this case, the value must be **individual**.

## Enumeration

`Type110`

## Fields

| Name |
|  --- |
| `Individual` |
| `Organization` |
| `Unknown` |

## Example

```ts
import { Type110 } from 'adyenlib';

const type110 = Type110.Individual;
```


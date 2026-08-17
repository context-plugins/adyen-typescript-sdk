
# Addr Match Enum

Indicates whether the cardholder shipping address and cardholder billing address are the same. Allowed values:

* **Y** — Shipping address matches billing address.
* **N** — Shipping address does not match billing address.

## Enumeration

`AddrMatchEnum`

## Fields

| Name |
|  --- |
| `Y` |
| `N` |

## Example

```ts
import { AddrMatchEnum } from 'adyen';

const addrMatch = AddrMatchEnum.Y;
```


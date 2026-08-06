
# Addr Match 1

Indicates whether the cardholder shipping Address and cardholder billing address are the same. Allowed values:

* **Y** — Shipping Address matches Billing Address.
* **N** — Shipping Address does not match Billing Address.

## Enumeration

`AddrMatch1`

## Fields

| Name |
|  --- |
| `Y` |
| `N` |

## Example

```ts
import { AddrMatch1 } from 'adyen';

const addrMatch1 = AddrMatch1.Y;
```


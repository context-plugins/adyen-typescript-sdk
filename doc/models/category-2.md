
# Category 2

The type of transfer.

Possible values:

- **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.

## Enumeration

`Category2`

## Fields

| Name |
|  --- |
| `Bank` |
| `Card` |
| `Grants` |
| `Interest` |
| `Internal` |
| `IssuedCard` |
| `Migration` |
| `PlatformPayment` |
| `TopUp` |
| `Upgrade` |

## Example

```ts
import { Category2 } from 'adyen';

const category2 = Category2.Grants;
```


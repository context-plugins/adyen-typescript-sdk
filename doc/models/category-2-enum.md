
# Category 2 Enum

The type of transfer.

Possible values:

- **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.

## Enumeration

`Category2Enum`

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
import { Category2Enum } from 'adyen';

const category2 = Category2Enum.Grants;
```


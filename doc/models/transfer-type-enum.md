
# Transfer Type Enum

The type of transfer to which the limit applies. Possible values:

* **instant**: the limit applies to transfers with an **instant** priority.
* **all**: the limit applies to all transfers, regardless of priority.

## Enumeration

`TransferTypeEnum`

## Fields

| Name |
|  --- |
| `Instant` |
| `All` |

## Example

```ts
import { TransferTypeEnum } from 'adyen';

const transferType = TransferTypeEnum.Instant;
```


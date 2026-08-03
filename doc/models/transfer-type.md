
# Transfer Type

The type of transfer to which the limit applies. Possible values:

* **instant**: the limit applies to transfers with an **instant** priority.
* **all**: the limit applies to all transfers, regardless of priority.

## Enumeration

`TransferType`

## Fields

| Name |
|  --- |
| `Instant` |
| `All` |

## Example

```ts
import { TransferType } from 'adyenlib';

const transferType = TransferType.Instant;
```


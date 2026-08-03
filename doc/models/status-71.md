
# Status 71

The status of the transaction.

Possible values:

* **pending**: The transaction is still pending.

* **booked**: The transaction has been booked to the balance account.

## Enumeration

`Status71`

## Fields

| Name |
|  --- |
| `Booked` |
| `Pending` |

## Example

```ts
import { Status71 } from 'adyenlib';

const status71 = Status71.Booked;
```


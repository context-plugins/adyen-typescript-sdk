
# Status 72 Enum

The status of the transaction.

Possible values:

* **pending**: The transaction is still pending.

* **booked**: The transaction has been booked to the balance account.

## Enumeration

`Status72Enum`

## Fields

| Name |
|  --- |
| `Booked` |
| `Pending` |

## Example

```ts
import { Status72Enum } from 'adyen';

const status72 = Status72Enum.Booked;
```



# Transaction Action 1

Action to realise on a transaction. In an `EnableService` request message:

- Starts a transaction by a swipe-ahead mechanism, with the services which are enabled.
- Aborts a swipe-ahead transaction or started by a `CardAcquisition`, and not followed by a service request from the Sale System to complete the transaction.
  Possible values:

* **AbortTransaction**
* **StartTransaction**

## Enumeration

`TransactionAction1`

## Fields

| Name |
|  --- |
| `StartTransaction` |
| `AbortTransaction` |

## Example

```ts
import { TransactionAction1 } from 'adyen';

const transactionAction1 = TransactionAction1.StartTransaction;
```


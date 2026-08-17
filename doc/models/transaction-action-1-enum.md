
# Transaction Action 1 Enum

Action to realise on a transaction. In an `EnableService` request message:

- Starts a transaction by a swipe-ahead mechanism, with the services which are enabled.
- Aborts a swipe-ahead transaction or started by a `CardAcquisition`, and not followed by a service request from the Sale System to complete the transaction.
  Possible values:

* **AbortTransaction**
* **StartTransaction**

## Enumeration

`TransactionAction1Enum`

## Fields

| Name |
|  --- |
| `StartTransaction` |
| `AbortTransaction` |

## Example

```ts
import { TransactionAction1Enum } from 'adyen';

const transactionAction1 = TransactionAction1Enum.StartTransaction;
```


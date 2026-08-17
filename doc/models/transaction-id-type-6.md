
# Transaction ID Type 6

Identification of the Transaction for the Acquirer.
If provided by the Acquirer.

## Structure

`TransactionIDType6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionID` | `string` | Required | Unique identification of a transaction to identify the transaction on<br>the Sale System (e.g. ticket number), or the POI System.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `timeStamp` | `string` | Required | Date and time of a transaction for the Sale System, the POI System or the Acquirer.<br>Ensures the uniqueness of a transaction and indicates the time when the event<br>occurs in the EventNotification message. |

## Example

```ts
import { TransactionIDType6 } from 'adyen';

const transactionIDType6: TransactionIDType6 = {
  transactionID: 'TransactionID8',
  timeStamp: '2016-03-13T12:52:32.123Z',
};
```


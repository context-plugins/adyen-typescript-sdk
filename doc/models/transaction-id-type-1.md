
# Transaction ID Type 1

Identification of a Sale transaction.

## Structure

`TransactionIDType1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionID` | `string` | Required | Unique identification of a transaction to identify the transaction on<br>the Sale System (e.g. ticket number), or the POI System.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `timeStamp` | `string` | Required | Date and time of a transaction for the Sale System, the POI System or the Acquirer.<br>Ensures the uniqueness of a transaction and indicates the time when the event<br>occurs in the EventNotification message. |

## Example

```ts
import { TransactionIDType1 } from 'adyen';

const transactionIDType1: TransactionIDType1 = {
  transactionID: 'TransactionID6',
  timeStamp: '2016-03-13T12:52:32.123Z',
};
```


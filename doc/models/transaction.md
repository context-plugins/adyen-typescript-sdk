
# Transaction

## Structure

`Transaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolder` | [`ResourceReference3`](../../doc/models/resource-reference-3.md) | Required | Contains information about the account holder associated with the `balanceAccount`. |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | Contains information about the amount of the transaction. |
| `balanceAccount` | [`ResourceReference4`](../../doc/models/resource-reference-4.md) | Required | Contains information about the balance account involved in the transaction. |
| `balancePlatform` | `string` | Required | The unique identifier of the balance platform. |
| `bookingDate` | `string` | Required | The date the transaction was booked into the balance account. |
| `creationDate` | `string \| undefined` | Optional | The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**. |
| `description` | `string \| undefined` | Optional | The `description` from the `/transfers` request. |
| `id` | `string` | Required | The unique identifier of the transaction. |
| `paymentInstrument` | [`PaymentInstrument21 \| undefined`](../../doc/models/payment-instrument-21.md) | Optional | Contains information about the payment instrument that was used for the transaction. |
| `referenceForBeneficiary` | `string \| undefined` | Optional | The reference sent to or received from the counterparty.<br><br>* For outgoing funds, this is the [`referenceForBeneficiary`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__resParam_referenceForBeneficiary) from the  [`/transfers`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__reqParam_referenceForBeneficiary) request.<br><br>* For incoming funds, this is the reference from the sender. |
| `status` | [`Status72Enum`](../../doc/models/status-72-enum.md) | Required | The status of the transaction.<br><br>Possible values:<br><br>* **pending**: The transaction is still pending.<br><br>* **booked**: The transaction has been booked to the balance account. |
| `transfer` | [`TransferView2 \| undefined`](../../doc/models/transfer-view-2.md) | Optional | Contains information about the transfer related to the transaction. |
| `valueDate` | `string` | Required | The date the transfer amount becomes available in the balance account. |

## Example

```ts
import { Priority1Enum, Status72Enum, Transaction, Type310Enum } from 'adyen';

const transaction: Transaction = {
  accountHolder: {
    description: 'description0',
    id: 'id0',
    reference: 'reference4',
  },
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  balanceAccount: {
    description: 'description2',
    id: 'id2',
    reference: 'reference2',
  },
  balancePlatform: 'balancePlatform0',
  bookingDate: '2016-03-13T12:52:32.123Z',
  id: 'id8',
  status: Status72Enum.Booked,
  valueDate: '2016-03-13T12:52:32.123Z',
  creationDate: '2016-03-13T12:52:32.123Z',
  description: 'description8',
  paymentInstrument: {
    description: 'description0',
    id: 'id0',
    reference: 'reference6',
    tokenType: 'tokenType6',
  },
  referenceForBeneficiary: 'referenceForBeneficiary2',
  transfer: {
    reference: 'reference4',
    categoryData: {
      priority: Priority1Enum.Instant,
      type: Type310Enum.Bank,
    },
    id: 'id8',
  },
};
```


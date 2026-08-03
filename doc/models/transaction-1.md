
# Transaction 1

*This model accepts additional fields of type unknown.*

## Structure

`Transaction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolder` | [`ResourceReference`](../../doc/models/resource-reference.md) | Required | - |
| `amount` | [`Amount5`](../../doc/models/amount-5.md) | Required | - |
| `balanceAccount` | [`ResourceReference`](../../doc/models/resource-reference.md) | Required | - |
| `balancePlatform` | `string` | Required | The unique identifier of the balance platform. |
| `bookingDate` | `string` | Required | The date the transaction was booked into the balance account. |
| `creationDate` | `string \| undefined` | Optional | The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**. |
| `description` | `string \| undefined` | Optional | The `description` from the `/transfers` request. |
| `id` | `string` | Required | The unique identifier of the transaction. |
| `paymentInstrument` | [`PaymentInstrument2 \| undefined`](../../doc/models/payment-instrument-2.md) | Optional | - |
| `referenceForBeneficiary` | `string \| undefined` | Optional | The reference sent to or received from the counterparty.<br><br>* For outgoing funds, this is the [`referenceForBeneficiary`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__resParam_referenceForBeneficiary) from the  [`/transfers`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__reqParam_referenceForBeneficiary) request.<br><br>* For incoming funds, this is the reference from the sender. |
| `status` | [`Status71`](../../doc/models/status-71.md) | Required | - |
| `transfer` | [`TransferView \| undefined`](../../doc/models/transfer-view.md) | Optional | - |
| `valueDate` | `string` | Required | The date the transfer amount becomes available in the balance account. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Priority, Status71, Transaction1, Type312 } from 'adyenlib';

const transaction1: Transaction1 = {
  accountHolder: {
    description: 'description0',
    id: 'id0',
    reference: 'reference4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  balanceAccount: {
    description: 'description2',
    id: 'id2',
    reference: 'reference2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  balancePlatform: 'balancePlatform8',
  bookingDate: '2016-03-13T12:52:32.123Z',
  id: 'id6',
  status: Status71.Booked,
  valueDate: '2016-03-13T12:52:32.123Z',
  creationDate: '2016-03-13T12:52:32.123Z',
  description: 'description6',
  paymentInstrument: {
    description: 'description0',
    id: 'id0',
    reference: 'reference6',
    tokenType: 'tokenType6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  referenceForBeneficiary: 'referenceForBeneficiary6',
  transfer: {
    reference: 'reference4',
    categoryData: {
      priority: Priority.Instant,
      type: Type312.Bank,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    id: 'id8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```



# Transaction Search Response

## Structure

`TransactionSearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`Links21 \| undefined`](../../doc/models/links-21.md) | Optional | Contains links to the next and previous page whenever applicable. |
| `data` | [`Transaction[] \| undefined`](../../doc/models/transaction.md) | Optional | Contains the transactions that match the query parameters. |

## Example

```ts
import {
  Priority1Enum,
  Status72Enum,
  TransactionSearchResponse,
  Type310Enum,
} from 'adyen';

const transactionSearchResponse: TransactionSearchResponse = {
  links: {
    next: {
      href: 'href4',
    },
    prev: {
      href: 'href8',
    },
  },
  data: [
    {
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
      balancePlatform: 'balancePlatform2',
      bookingDate: '2016-03-13T12:52:32.123Z',
      id: 'id0',
      status: Status72Enum.Booked,
      valueDate: '2016-03-13T12:52:32.123Z',
      creationDate: '2016-03-13T12:52:32.123Z',
      description: 'description0',
      paymentInstrument: {
        description: 'description0',
        id: 'id0',
        reference: 'reference6',
        tokenType: 'tokenType6',
      },
      referenceForBeneficiary: 'referenceForBeneficiary0',
      transfer: {
        reference: 'reference4',
        categoryData: {
          priority: Priority1Enum.Instant,
          type: Type310Enum.Bank,
        },
        id: 'id8',
      },
    },
    {
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
      balancePlatform: 'balancePlatform2',
      bookingDate: '2016-03-13T12:52:32.123Z',
      id: 'id0',
      status: Status72Enum.Booked,
      valueDate: '2016-03-13T12:52:32.123Z',
      creationDate: '2016-03-13T12:52:32.123Z',
      description: 'description0',
      paymentInstrument: {
        description: 'description0',
        id: 'id0',
        reference: 'reference6',
        tokenType: 'tokenType6',
      },
      referenceForBeneficiary: 'referenceForBeneficiary0',
      transfer: {
        reference: 'reference4',
        categoryData: {
          priority: Priority1Enum.Instant,
          type: Type310Enum.Bank,
        },
        id: 'id8',
      },
    },
    {
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
      balancePlatform: 'balancePlatform2',
      bookingDate: '2016-03-13T12:52:32.123Z',
      id: 'id0',
      status: Status72Enum.Booked,
      valueDate: '2016-03-13T12:52:32.123Z',
      creationDate: '2016-03-13T12:52:32.123Z',
      description: 'description0',
      paymentInstrument: {
        description: 'description0',
        id: 'id0',
        reference: 'reference6',
        tokenType: 'tokenType6',
      },
      referenceForBeneficiary: 'referenceForBeneficiary0',
      transfer: {
        reference: 'reference4',
        categoryData: {
          priority: Priority1Enum.Instant,
          type: Type310Enum.Bank,
        },
        id: 'id8',
      },
    }
  ],
};
```


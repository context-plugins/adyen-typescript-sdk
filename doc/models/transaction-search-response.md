
# Transaction Search Response

*This model accepts additional fields of type unknown.*

## Structure

`TransactionSearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`Links3 \| undefined`](../../doc/models/links-3.md) | Optional | - |
| `data` | [`Transaction1[] \| undefined`](../../doc/models/transaction-1.md) | Optional | Contains the transactions that match the query parameters. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  Priority,
  Status71,
  TransactionSearchResponse,
  Type312,
} from 'adyen';

const transactionSearchResponse: TransactionSearchResponse = {
  links: {
    next: {
      href: 'href4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    prev: {
      href: 'href8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  data: [
    {
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
      balancePlatform: 'balancePlatform2',
      bookingDate: '2016-03-13T12:52:32.123Z',
      id: 'id0',
      status: Status71.Booked,
      valueDate: '2016-03-13T12:52:32.123Z',
      creationDate: '2016-03-13T12:52:32.123Z',
      description: 'description0',
      paymentInstrument: {
        description: 'description0',
        id: 'id0',
        reference: 'reference6',
        tokenType: 'tokenType6',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      referenceForBeneficiary: 'referenceForBeneficiary0',
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
    },
    {
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
      balancePlatform: 'balancePlatform2',
      bookingDate: '2016-03-13T12:52:32.123Z',
      id: 'id0',
      status: Status71.Booked,
      valueDate: '2016-03-13T12:52:32.123Z',
      creationDate: '2016-03-13T12:52:32.123Z',
      description: 'description0',
      paymentInstrument: {
        description: 'description0',
        id: 'id0',
        reference: 'reference6',
        tokenType: 'tokenType6',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      referenceForBeneficiary: 'referenceForBeneficiary0',
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
    },
    {
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
      balancePlatform: 'balancePlatform2',
      bookingDate: '2016-03-13T12:52:32.123Z',
      id: 'id0',
      status: Status71.Booked,
      valueDate: '2016-03-13T12:52:32.123Z',
      creationDate: '2016-03-13T12:52:32.123Z',
      description: 'description0',
      paymentInstrument: {
        description: 'description0',
        id: 'id0',
        reference: 'reference6',
        tokenType: 'tokenType6',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      referenceForBeneficiary: 'referenceForBeneficiary0',
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


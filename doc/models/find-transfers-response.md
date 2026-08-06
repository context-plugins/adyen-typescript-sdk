
# Find Transfers Response

*This model accepts additional fields of type unknown.*

## Structure

`FindTransfersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`Links3 \| undefined`](../../doc/models/links-3.md) | Optional | - |
| `data` | [`TransferData[] \| undefined`](../../doc/models/transfer-data.md) | Optional | Contains the transfers that match the query parameters. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  Category3,
  FindTransfersResponse,
  Priority,
  Status53,
  Type312,
} from 'adyen';

const findTransfersResponse: FindTransfersResponse = {
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
      amount: {
        currency: 'currency2',
        value: BigInt(110),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      category: Category3.Internal,
      status: Status53.Cancelled,
      accountHolder: {
        description: 'description0',
        id: 'id0',
        reference: 'reference4',
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
      balances: [
        {
          balance: BigInt(224),
          currency: 'currency0',
          received: BigInt(214),
          reserved: BigInt(158),
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          balance: BigInt(224),
          currency: 'currency0',
          received: BigInt(214),
          reserved: BigInt(158),
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          balance: BigInt(224),
          currency: 'currency0',
          received: BigInt(214),
          reserved: BigInt(158),
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      categoryData: {
        priority: Priority.Instant,
        type: Type312.Bank,
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


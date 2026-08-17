
# Find Transfers Response

## Structure

`FindTransfersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`Links21 \| undefined`](../../doc/models/links-21.md) | Optional | Contains links to the next and previous page whenever applicable. |
| `data` | [`TransferData[] \| undefined`](../../doc/models/transfer-data.md) | Optional | Contains the transfers that match the query parameters. |

## Example

```ts
import {
  Category3Enum,
  FindTransfersResponse,
  Priority1Enum,
  Status51Enum,
  Type310Enum,
} from 'adyen';

const findTransfersResponse: FindTransfersResponse = {
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
      amount: {
        currency: 'currency2',
        value: BigInt(110),
      },
      category: Category3Enum.Internal,
      status: Status51Enum.Cancelled,
      accountHolder: {
        description: 'description0',
        id: 'id0',
        reference: 'reference4',
      },
      balanceAccount: {
        description: 'description2',
        id: 'id2',
        reference: 'reference2',
      },
      balancePlatform: 'balancePlatform2',
      balances: [
        {
          balance: BigInt(224),
          currency: 'currency0',
          received: BigInt(214),
          reserved: BigInt(158),
        },
        {
          balance: BigInt(224),
          currency: 'currency0',
          received: BigInt(214),
          reserved: BigInt(158),
        },
        {
          balance: BigInt(224),
          currency: 'currency0',
          received: BigInt(214),
          reserved: BigInt(158),
        }
      ],
      categoryData: {
        priority: Priority1Enum.Instant,
        type: Type310Enum.Bank,
      },
    }
  ],
};
```


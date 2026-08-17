
# Create Permit Request

## Structure

`CreatePermitRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `permits` | [`Permit[]`](../../doc/models/permit.md) | Required | The permits to create for this recurring contract. |
| `recurringDetailReference` | `string` | Required | The recurring contract the new permits will use. |
| `shopperReference` | `string` | Required | The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID). |

## Example

```ts
import { CreatePermitRequest } from 'adyen';

const createPermitRequest: CreatePermitRequest = {
  merchantAccount: 'merchantAccount4',
  permits: [
    {
      partnerId: 'partnerId8',
      profileReference: 'profileReference0',
      restriction: {
        maxAmount: {
          currency: 'currency4',
          value: BigInt(160),
        },
        singleTransactionLimit: {
          currency: 'currency8',
          value: BigInt(122),
        },
        singleUse: false,
      },
      resultKey: 'resultKey4',
      validTillDate: '2016-03-13T12:52:32.123Z',
    }
  ],
  recurringDetailReference: 'recurringDetailReference2',
  shopperReference: 'shopperReference0',
};
```



# Create Permit Request

*This model accepts additional fields of type unknown.*

## Structure

`CreatePermitRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `permits` | [`Permit[]`](../../doc/models/permit.md) | Required | The permits to create for this recurring contract. |
| `recurringDetailReference` | `string` | Required | The recurring contract the new permits will use. |
| `shopperReference` | `string` | Required | The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreatePermitRequest } from 'adyenlib';

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
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        singleTransactionLimit: {
          currency: 'currency8',
          value: BigInt(122),
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        singleUse: false,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      resultKey: 'resultKey4',
      validTillDate: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  recurringDetailReference: 'recurringDetailReference2',
  shopperReference: 'shopperReference0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


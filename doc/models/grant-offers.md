
# Grant Offers

*This model accepts additional fields of type unknown.*

## Structure

`GrantOffers`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grantOffers` | [`GrantOffer[]`](../../doc/models/grant-offer.md) | Required | A list of available grant offers. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ContractType, GrantOffers } from 'adyen';

const grantOffers: GrantOffers = {
  grantOffers: [
    {
      accountHolderId: 'accountHolderId0',
      amount: {
        currency: 'currency2',
        value: BigInt(110),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      contractType: ContractType.CashAdvance,
      expiresAt: '2016-03-13T12:52:32.123Z',
      fee: {
        amount: {
          currency: 'currency2',
          value: BigInt(110),
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      id: 'id8',
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


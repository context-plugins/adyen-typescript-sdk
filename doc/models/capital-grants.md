
# Capital Grants

*This model accepts additional fields of type unknown.*

## Structure

`CapitalGrants`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grants` | [`CapitalGrant[]`](../../doc/models/capital-grant.md) | Required | The unique identifier of the grant. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CapitalGrants, Status18 } from 'adyen';

const capitalGrants: CapitalGrants = {
  grants: [
    {
      balances: {
        currency: 'currency0',
        fee: BigInt(72),
        principal: BigInt(110),
        total: BigInt(150),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      grantAccountId: 'grantAccountId6',
      grantOfferId: 'grantOfferId6',
      id: 'id0',
      status: Status18.Pending,
      amount: {
        currency: 'currency2',
        value: BigInt(110),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      counterparty: {
        accountHolderId: 'accountHolderId0',
        balanceAccountId: 'balanceAccountId0',
        transferInstrumentId: 'transferInstrumentId4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
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
      repayment: {
        basisPoints: 18,
        term: {
          estimatedDays: 248,
          maximumDays: 24,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        threshold: {
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


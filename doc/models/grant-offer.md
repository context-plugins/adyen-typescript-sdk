
# Grant Offer

*This model accepts additional fields of type unknown.*

## Structure

`GrantOffer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string` | Required | The identifier of the account holder to which the grant is offered. |
| `amount` | [`Amount5 \| undefined`](../../doc/models/amount-5.md) | Optional | - |
| `contractType` | [`ContractType \| undefined`](../../doc/models/contract-type.md) | Optional | - |
| `expiresAt` | `string \| undefined` | Optional | The end date of the grant offer validity period. |
| `fee` | [`Fee2 \| undefined`](../../doc/models/fee-2.md) | Optional | - |
| `id` | `string \| undefined` | Optional | The unique identifier of the grant offer. |
| `repayment` | [`Repayment8 \| undefined`](../../doc/models/repayment-8.md) | Optional | - |
| `startsAt` | `string \| undefined` | Optional | The starting date of the grant offer validity period. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ContractType, GrantOffer } from 'adyenlib';

const grantOffer: GrantOffer = {
  accountHolderId: 'accountHolderId4',
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
  id: 'id2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


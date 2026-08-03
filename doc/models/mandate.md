
# Mandate

*This model accepts additional fields of type unknown.*

## Structure

`Mandate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string \| undefined` | Optional | The unique identifier of the balance account linked to the payment instrument. |
| `counterparty` | [`MandateBankAccount \| undefined`](../../doc/models/mandate-bank-account.md) | Optional | - |
| `createdAt` | `string \| undefined` | Optional | The date when the mandate was created. |
| `id` | `string \| undefined` | Optional | The unique identifier of the mandate. |
| `paymentInstrumentId` | `string \| undefined` | Optional | The unique identifier of the payment instrument linked to the mandate. |
| `status` | [`MandateStatus2 \| undefined`](../../doc/models/mandate-status-2.md) | Optional | - |
| `type` | [`MandateType2 \| undefined`](../../doc/models/mandate-type-2.md) | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | The date when the mandate was updated. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Mandate } from 'adyenlib';

const mandate: Mandate = {
  balanceAccountId: 'balanceAccountId2',
  counterparty: {
    accountHolder: {
      fullName: 'fullName0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    accountIdentification: {
      type: 'MandateAccountIdentification2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  createdAt: '2016-03-13T12:52:32.123Z',
  id: 'id6',
  paymentInstrumentId: 'paymentInstrumentId8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


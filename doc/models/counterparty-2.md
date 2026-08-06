
# Counterparty 2

*This model accepts additional fields of type unknown.*

## Structure

`Counterparty2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccount` | [`BankAccount \| undefined`](../../doc/models/bank-account.md) | Optional | - |
| `transferInstrumentId` | `string \| undefined` | Optional | The unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Counterparty2, Type413 } from 'adyen';

const counterparty2: Counterparty2 = {
  bankAccount: {
    accountIdentification: {
      accountNumber: 'accountNumber4',
      bsbCode: 'bsbCode8',
      type: Type413.AuLocal,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  transferInstrumentId: 'transferInstrumentId2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


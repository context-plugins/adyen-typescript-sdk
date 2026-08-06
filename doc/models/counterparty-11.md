
# Counterparty 11

The recipient of the funds transfer. A bank account or a transfer instrument.

*This model accepts additional fields of type unknown.*

## Structure

`Counterparty11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccount` | [`BankAccount \| undefined`](../../doc/models/bank-account.md) | Optional | - |
| `transferInstrumentId` | `string \| undefined` | Optional | The unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Counterparty11, Type413 } from 'adyen';

const counterparty11: Counterparty11 = {
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
  transferInstrumentId: 'transferInstrumentId8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


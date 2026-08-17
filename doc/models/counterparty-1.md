
# Counterparty 1

The recipient of the funds transfer. A bank account or a transfer instrument.

## Structure

`Counterparty1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccount` | [`BankAccount11 \| undefined`](../../doc/models/bank-account-11.md) | Optional | Contains information about the bank account. |
| `transferInstrumentId` | `string \| undefined` | Optional | The unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id). |

## Example

```ts
import { Counterparty1 } from 'adyen';

const counterparty1: Counterparty1 = {
  bankAccount: {
    accountIdentification: {
      accountNumber: 'accountNumber4',
      bsbCode: 'bsbCode8',
      type: 'type2',
    },
  },
  transferInstrumentId: 'transferInstrumentId6',
};
```


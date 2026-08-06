
# Transfer Instrument Info

*This model accepts additional fields of type unknown.*

## Structure

`TransferInstrumentInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccount` | [`BankAccountInfo`](../../doc/models/bank-account-info.md) | Required | - |
| `legalEntityId` | `string` | Required | The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) that owns the transfer instrument. |
| `type` | [`Type222`](../../doc/models/type-222.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TransferInstrumentInfo, Type222, Type413 } from 'adyen';

const transferInstrumentInfo: TransferInstrumentInfo = {
  bankAccount: {
    accountIdentification: {
      accountNumber: 'accountNumber4',
      bsbCode: 'bsbCode8',
      type: Type413.AuLocal,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    accountType: 'accountType8',
    bankName: 'bankName6',
    countryCode: 'countryCode6',
    trustedSource: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  legalEntityId: 'legalEntityId6',
  type: Type222.BankAccount,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


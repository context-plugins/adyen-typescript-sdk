
# Transfer Instrument Info

## Structure

`TransferInstrumentInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccount` | [`BankAccountInfo1`](../../doc/models/bank-account-info-1.md) | Required | Contains information about the legal entity's bank account. |
| `legalEntityId` | `string` | Required | The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) that owns the transfer instrument. |
| `type` | [`Type221Enum`](../../doc/models/type-221-enum.md) | Required | The type of transfer instrument.<br><br>Possible value: **bankAccount**. |

## Example

```ts
import { TransferInstrumentInfo, Type221Enum } from 'adyen';

const transferInstrumentInfo: TransferInstrumentInfo = {
  bankAccount: {
    accountIdentification: {
      accountNumber: 'accountNumber4',
      bsbCode: 'bsbCode8',
      type: 'type2',
    },
    accountType: 'accountType8',
    bankName: 'bankName6',
    countryCode: 'countryCode6',
  },
  legalEntityId: 'legalEntityId6',
  type: Type221Enum.BankAccount,
};
```



# Mandate 1

## Structure

`Mandate1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string \| undefined` | Optional | The unique identifier of the balance account linked to the payment instrument. |
| `counterparty` | [`MandateBankAccount2 \| undefined`](../../doc/models/mandate-bank-account-2.md) | Optional | Contains information to identify the counterparty. |
| `createdAt` | `string \| undefined` | Optional | The date when the mandate was created. |
| `id` | `string \| undefined` | Optional | The unique identifier of the mandate. |
| `paymentInstrumentId` | `string \| undefined` | Optional | The unique identifier of the payment instrument linked to the mandate. |
| `status` | [`MandateStatus2Enum \| undefined`](../../doc/models/mandate-status-2-enum.md) | Optional | The status of the mandate.<br><br>Possible values: **pending**, **approved**, **cancelled**. |
| `type` | [`MandateType2Enum \| undefined`](../../doc/models/mandate-type-2-enum.md) | Optional | The type of mandate. Possible value: **bacs**. |
| `updatedAt` | `string \| undefined` | Optional | The date when the mandate was updated. |

## Example

```ts
import { Mandate1 } from 'adyen';

const mandate1: Mandate1 = {
  balanceAccountId: 'balanceAccountId0',
  counterparty: {
    accountHolder: {
      fullName: 'fullName0',
    },
    accountIdentification: {
      type: 'MandateAccountIdentification2',
    },
  },
  createdAt: '2016-03-13T12:52:32.123Z',
  id: 'id8',
  paymentInstrumentId: 'paymentInstrumentId0',
};
```


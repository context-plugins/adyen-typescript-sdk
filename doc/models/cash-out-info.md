
# Cash Out Info

*This model accepts additional fields of type unknown.*

## Structure

`CashOutInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount5`](../../doc/models/amount-5.md) | Required | - |
| `counterparty` | [`CashOutInfoCounterparty \| undefined`](../../doc/models/cash-out-info-counterparty.md) | Optional | - |
| `description` | `string \| undefined` | Optional | Allowed and returned only when you provide the `counterparty.transferInstrumentId` field.<br><br>Your description of the cashout transfer. This description is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.<br><br>If you do not provide a description, Adyen generates a description automatically. This generated description is not returned in the response.<br><br>Supported characters: **[a-z] [A-Z] [0-9] / - ? : ( ) . , ' + Space**. |
| `fee` | [`Fee2 \| undefined`](../../doc/models/fee-2.md) | Optional | - |
| `id` | `string \| undefined` | Optional, Read-only | The ID of the resource. |
| `instructingBalanceAccountId` | `string` | Required | The unique identifier of the balance account that initiates the cashout request. |
| `referenceForBeneficiary` | `string \| undefined` | Optional | Allowed and returned only when you provide the `counterparty.transferInstrumentId` field.<br><br>The reference that is sent to the recipient of a cashout transfer. This reference is also sent in all webhooks related to the cashout transfer, so you can use it to track the status of the transfer.<br><br>If you do not provide a reference for the beneficiary, Adyen generates one automatically. This generated reference for the beneficiary is not returned in the response.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**. |
| `transferInstrumentId` | `string \| undefined` | Optional | **Use `counterparty.transferInstrumentId` instead.**<br><br>The unique identifier of the counterparty transfer instrument. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CashOutInfo } from 'adyen';

const cashOutInfo: CashOutInfo = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  instructingBalanceAccountId: 'instructingBalanceAccountId2',
  counterparty: {
    transferInstrumentId: 'transferInstrumentId4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  description: 'description0',
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
  id: 'id0',
  referenceForBeneficiary: 'referenceForBeneficiary0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


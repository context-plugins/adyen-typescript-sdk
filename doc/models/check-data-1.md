
# Check Data 1

Information related to the paper check used for the transaction.
If PaymentInstrumentType is Check.

*This model accepts additional fields of type unknown.*

## Structure

`CheckData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankId` | `string \| undefined` | Optional | Identification of the bank.<br>Mandatory if TrackData absent.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `accountNumber` | `string \| undefined` | Optional | Identification of the customer account.<br>Mandatory if TrackData absent.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `checkNumber` | `string \| undefined` | Optional | Identification of the bank check.<br>Mandatory if TrackData absent.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `trackData` | [`TrackData2 \| undefined`](../../doc/models/track-data-2.md) | Optional | - |
| `checkCardNumber` | `string \| undefined` | Optional | Check guarantee card number.<br>If provided by the customer.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `typeCode` | [`TypeCode1 \| undefined`](../../doc/models/type-code-1.md) | Optional | - |
| `country` | `string \| undefined` | Optional | Country of the bank check.<br>Absent if country of the Sale system.<br><br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CheckData1, TrackFormat1 } from 'adyen';

const checkData1: CheckData1 = {
  bankId: 'BankID2',
  accountNumber: 'AccountNumber8',
  checkNumber: 'CheckNumber0',
  trackData: {
    trackValue: 'TrackValue6',
    trackNumb: 3,
    trackFormat: TrackFormat1.Jisii,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  checkCardNumber: 'CheckCardNumber8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


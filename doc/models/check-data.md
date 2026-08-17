
# Check Data

Information related to the paper check used for the transaction.
Allows the check information to be provided by the Sale System before requesting the payment, or stored by the Sale System after processing of the payment.

## Structure

`CheckData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankID` | `string \| undefined` | Optional | Identification of the bank.<br>Mandatory if TrackData absent.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `accountNumber` | `string \| undefined` | Optional | Identification of the customer account.<br>Mandatory if TrackData absent.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `checkNumber` | `string \| undefined` | Optional | Identification of the bank check.<br>Mandatory if TrackData absent.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `trackData` | [`TrackData1 \| undefined`](../../doc/models/track-data-1.md) | Optional | Magnetic track or magnetic ink characters line.<br>Mandatory if CheckNumber absent. |
| `checkCardNumber` | `string \| undefined` | Optional | Check guarantee card number.<br>If provided by the customer.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `typeCode` | [`TypeCode1Enum \| undefined`](../../doc/models/type-code-1-enum.md) | Optional | Type of bank check.<br>Possible values:<br><br>* **Company**<br>* **Personal** |
| `country` | `string \| undefined` | Optional | Country of the bank check.<br>Absent if country of the Sale system.<br><br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |

## Example

```ts
import { CheckData, TrackFormat1Enum } from 'adyen';

const checkData: CheckData = {
  bankID: 'BankID0',
  accountNumber: 'AccountNumber6',
  checkNumber: 'CheckNumber2',
  trackData: {
    trackValue: 'TrackValue6',
    trackNumb: 3,
    trackFormat: TrackFormat1Enum.JISII,
  },
  checkCardNumber: 'CheckCardNumber6',
};
```


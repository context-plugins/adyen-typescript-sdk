
# Patchable Fraud Info

## Structure

`PatchableFraudInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardDoesNotBelongToCardholder` | `boolean \| undefined` | Optional | The card is no longer in the cardholder's possession. Set to **true** if the card is lost or stolen. |
| `cardWasCounterfeited` | `boolean \| undefined` | Optional | The card was counterfeited. |
| `descriptionOfIssue` | `string \| undefined` | Optional | Your description of the issue for raising a dispute of `type` **fraud**.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `2500` |
| `reportOnly` | `boolean \| null \| undefined` | Optional | Set to **true** to report fraud to Adyen with no further action, such as a request for a chargeback or fee reversal. The default value is **false**. |

## Example

```ts
import { PatchableFraudInfo } from 'adyen';

const patchableFraudInfo: PatchableFraudInfo = {
  cardDoesNotBelongToCardholder: false,
  cardWasCounterfeited: false,
  descriptionOfIssue: 'descriptionOfIssue4',
  reportOnly: false,
};
```


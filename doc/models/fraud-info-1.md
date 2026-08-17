
# Fraud Info 1

Additional information for raising a dispute of `type` **fraud**. Required for disputes of `type` **fraud**.

## Structure

`FraudInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardDoesNotBelongToCardholder` | `boolean` | Required | The card is no longer in the cardholder's possession. Set to **true** if the card is lost or stolen. |
| `cardWasCounterfeited` | `boolean` | Required | The card was counterfeited. |
| `descriptionOfIssue` | `string` | Required | Your description of the issue for raising a dispute of `type` **fraud**.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `2500` |
| `reportOnly` | `boolean \| undefined` | Optional | Set to **true** to report fraud to Adyen with no further action, such as a request for a chargeback or fee reversal. The default value is **false**. |

## Example

```ts
import { FraudInfo1 } from 'adyen';

const fraudInfo1: FraudInfo1 = {
  cardDoesNotBelongToCardholder: false,
  cardWasCounterfeited: false,
  descriptionOfIssue: 'descriptionOfIssue2',
  reportOnly: false,
};
```


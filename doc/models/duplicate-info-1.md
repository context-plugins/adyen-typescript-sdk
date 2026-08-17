
# Duplicate Info 1

Additional information for raising a dispute of `type` **duplicate**. Required for disputes of `type` **duplicate**.

## Structure

`DuplicateInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `duplicateTransactionId` | `string` | Required | The transaction id associated with the duplicate charge for which you are disputing. The disputed transaction must be in the same amount as the duplicate transaction.<br><br>**Constraints**: *Minimum Length*: `1` |
| `sameCard` | `boolean` | Required | The duplicate charge was made on the same card. Possible values: **true**, **false**. |
| `sameIssuer` | `boolean \| undefined` | Optional | The issuer associated with each charge is the same. Possible values: **true**, **false**. |

## Example

```ts
import { DuplicateInfo1 } from 'adyen';

const duplicateInfo1: DuplicateInfo1 = {
  duplicateTransactionId: 'duplicateTransactionId2',
  sameCard: false,
  sameIssuer: false,
};
```


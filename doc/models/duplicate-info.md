
# Duplicate Info

## Structure

`DuplicateInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `duplicateTransactionId` | `string` | Required | The transaction id associated with the duplicate charge for which you are disputing. The disputed transaction must be in the same amount as the duplicate transaction.<br><br>**Constraints**: *Minimum Length*: `1` |
| `sameCard` | `boolean` | Required | The duplicate charge was made on the same card. Possible values: **true**, **false**. |
| `sameIssuer` | `boolean \| undefined` | Optional | The issuer associated with each charge is the same. Possible values: **true**, **false**. |

## Example

```ts
import { DuplicateInfo } from 'adyen';

const duplicateInfo: DuplicateInfo = {
  duplicateTransactionId: 'duplicateTransactionId4',
  sameCard: false,
  sameIssuer: false,
};
```



# Patchable Duplicate Info

## Structure

`PatchableDuplicateInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `duplicateTransactionId` | `string \| undefined` | Optional | The transaction id associated with the duplicate charge for which you are disputing. The disputed transaction must be in the same amount as the duplicate transaction.<br><br>**Constraints**: *Minimum Length*: `1` |
| `sameCard` | `boolean \| undefined` | Optional | The duplicate charge was made on the same card. Possible values: **true**, **false**. |
| `sameIssuer` | `boolean \| null \| undefined` | Optional | The issuer associated with each charge is the same. Possible values: **true**, **false**. |

## Example

```ts
import { PatchableDuplicateInfo } from 'adyen';

const patchableDuplicateInfo: PatchableDuplicateInfo = {
  duplicateTransactionId: 'duplicateTransactionId2',
  sameCard: false,
  sameIssuer: false,
};
```


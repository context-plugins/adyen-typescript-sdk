
# Duplicate Info

*This model accepts additional fields of type unknown.*

## Structure

`DuplicateInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `duplicateTransactionId` | `string` | Required | The transaction id associated with the duplicate charge for which you are disputing. The disputed transaction must be in the same amount as the duplicate transaction.<br><br>**Constraints**: *Minimum Length*: `1` |
| `sameCard` | `boolean` | Required | The duplicate charge was made on the same card. Possible values: **true**, **false**. |
| `sameIssuer` | `boolean \| undefined` | Optional | The issuer associated with each charge is the same. Possible values: **true**, **false**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DuplicateInfo } from 'adyen';

const duplicateInfo: DuplicateInfo = {
  duplicateTransactionId: 'duplicateTransactionId4',
  sameCard: false,
  sameIssuer: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


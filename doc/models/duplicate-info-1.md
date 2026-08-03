
# Duplicate Info 1

Additional information for raising a dispute of `type` **duplicate**. Required for disputes of `type` **duplicate**.

*This model accepts additional fields of type unknown.*

## Structure

`DuplicateInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `duplicateTransactionId` | `string` | Required | The transaction id associated with the duplicate charge for which you are disputing. The disputed transaction must be in the same amount as the duplicate transaction.<br><br>**Constraints**: *Minimum Length*: `1` |
| `sameCard` | `boolean` | Required | The duplicate charge was made on the same card. Possible values: **true**, **false**. |
| `sameIssuer` | `boolean \| undefined` | Optional | The issuer associated with each charge is the same. Possible values: **true**, **false**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DuplicateInfo1 } from 'adyenlib';

const duplicateInfo1: DuplicateInfo1 = {
  duplicateTransactionId: 'duplicateTransactionId2',
  sameCard: false,
  sameIssuer: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


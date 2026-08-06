
# Delete Legal Arrangement Request

*This model accepts additional fields of type unknown.*

## Structure

`DeleteLegalArrangementRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the account holder. |
| `legalArrangements` | [`LegalArrangementRequest[]`](../../doc/models/legal-arrangement-request.md) | Required | List of legal arrangements. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DeleteLegalArrangementRequest } from 'adyen';

const deleteLegalArrangementRequest: DeleteLegalArrangementRequest = {
  accountHolderCode: 'accountHolderCode2',
  legalArrangements: [
    {
      legalArrangementCode: 'legalArrangementCode2',
      legalArrangementEntityCodes: [
        'legalArrangementEntityCodes8'
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


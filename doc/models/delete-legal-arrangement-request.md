
# Delete Legal Arrangement Request

## Structure

`DeleteLegalArrangementRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the account holder. |
| `legalArrangements` | [`LegalArrangementRequest[]`](../../doc/models/legal-arrangement-request.md) | Required | List of legal arrangements. |

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
    }
  ],
};
```



# Legal Arrangement Request

## Structure

`LegalArrangementRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `legalArrangementCode` | `string` | Required | The code of the legal arrangement to be deleted. If you also send `legalArrangementEntityCodes`, only the entities listed will be deleted. |
| `legalArrangementEntityCodes` | `string[] \| undefined` | Optional | List of legal arrangement entities to be deleted. |

## Example

```ts
import { LegalArrangementRequest } from 'adyen';

const legalArrangementRequest: LegalArrangementRequest = {
  legalArrangementCode: 'legalArrangementCode0',
  legalArrangementEntityCodes: [
    'legalArrangementEntityCodes6',
    'legalArrangementEntityCodes7'
  ],
};
```


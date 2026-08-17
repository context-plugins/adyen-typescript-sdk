
# Get Pci Questionnaire Response

## Structure

`GetPciQuestionnaireResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content` | `string \| undefined` | Optional | The generated questionnaire in a base64 encoded format. |
| `createdAt` | `string \| undefined` | Optional | The date the questionnaire was created, in ISO 8601 extended format. For example, 2022-12-18T10:15:30+01:00 |
| `id` | `string \| undefined` | Optional | The unique identifier of the signed questionnaire. |
| `validUntil` | `string \| undefined` | Optional | The expiration date of the questionnaire, in ISO 8601 extended format. For example, 2022-12-18T10:15:30+01:00 |

## Example

```ts
import { GetPciQuestionnaireResponse } from 'adyen';

const getPciQuestionnaireResponse: GetPciQuestionnaireResponse = {
  content: 'content8',
  createdAt: '2016-03-13T12:52:32.123Z',
  id: 'id4',
  validUntil: '2016-03-13T12:52:32.123Z',
};
```


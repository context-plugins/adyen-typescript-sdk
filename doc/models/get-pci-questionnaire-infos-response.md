
# Get Pci Questionnaire Infos Response

## Structure

`GetPciQuestionnaireInfosResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`PciDocumentInfo[] \| undefined`](../../doc/models/pci-document-info.md) | Optional | Information about the signed PCI questionnaires. |

## Example

```ts
import { GetPciQuestionnaireInfosResponse } from 'adyen';

const getPciQuestionnaireInfosResponse: GetPciQuestionnaireInfosResponse = {
  data: [
    {
      createdAt: '2016-03-13T12:52:32.123Z',
      id: 'id0',
      validUntil: '2016-03-13T12:52:32.123Z',
    },
    {
      createdAt: '2016-03-13T12:52:32.123Z',
      id: 'id0',
      validUntil: '2016-03-13T12:52:32.123Z',
    }
  ],
};
```


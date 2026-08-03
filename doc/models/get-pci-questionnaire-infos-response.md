
# Get Pci Questionnaire Infos Response

*This model accepts additional fields of type unknown.*

## Structure

`GetPciQuestionnaireInfosResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`PciDocumentInfo[] \| undefined`](../../doc/models/pci-document-info.md) | Optional | Information about the signed PCI questionnaires. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetPciQuestionnaireInfosResponse } from 'adyenlib';

const getPciQuestionnaireInfosResponse: GetPciQuestionnaireInfosResponse = {
  data: [
    {
      createdAt: '2016-03-13T12:52:32.123Z',
      id: 'id0',
      validUntil: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      createdAt: '2016-03-13T12:52:32.123Z',
      id: 'id0',
      validUntil: '2016-03-13T12:52:32.123Z',
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


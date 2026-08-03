
# Document

*This model accepts additional fields of type unknown.*

## Structure

`Document`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attachment` | [`Attachment \| undefined`](../../doc/models/attachment.md) | Optional | - |
| `attachments` | [`Attachment[] \| undefined`](../../doc/models/attachment.md) | Optional | Array that contains the document. The array supports multiple attachments for uploading different sides or pages of a document. |
| `creationDate` | `string \| undefined` | Optional, Read-only | The creation date of the document. |
| `description` | `string` | Required | Your description for the document. |
| `expiryDate` | `string \| undefined` | Optional | The expiry date of the document, in YYYY-MM-DD format. |
| `fileName` | `string \| undefined` | Optional | The filename of the document. |
| `id` | `string \| undefined` | Optional, Read-only | The unique identifier of the document. |
| `issuerCountry` | `string \| undefined` | Optional | The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the document was issued. For example, **US**. |
| `issuerState` | `string \| undefined` | Optional | The state or province where the document was issued (AU only). |
| `modificationDate` | `string \| undefined` | Optional, Read-only | The modification date of the document. |
| `number` | `string \| undefined` | Optional | The number in the document. |
| `owner` | [`OwnerEntity \| undefined`](../../doc/models/owner-entity.md) | Optional | - |
| `type` | [`Type81`](../../doc/models/type-81.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Document, Type81 } from 'adyenlib';

const document: Document = {
  description: 'description6',
  type: Type81.Passport,
  attachment: {
    content: 'content2',
    contentType: 'contentType4',
    filename: 'filename0',
    pageName: 'pageName0',
    pageType: 'pageType6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  attachments: [
    {
      content: 'content4',
      contentType: 'contentType6',
      filename: 'filename2',
      pageName: 'pageName2',
      pageType: 'pageType8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      content: 'content4',
      contentType: 'contentType6',
      filename: 'filename2',
      pageName: 'pageName2',
      pageType: 'pageType8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      content: 'content4',
      contentType: 'contentType6',
      filename: 'filename2',
      pageName: 'pageName2',
      pageType: 'pageType8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  creationDate: '2016-03-13T12:52:32.123Z',
  expiryDate: 'expiryDate4',
  fileName: 'fileName0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


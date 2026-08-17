
# Document

## Structure

`Document`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attachment` | [`Attachment1 \| undefined`](../../doc/models/attachment-1.md) | Optional | Object that contains the document. |
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
| `owner` | [`OwnerEntity2 \| undefined`](../../doc/models/owner-entity-2.md) | Optional | Contains information about the resource that owns the document. |
| `type` | [`Type84Enum`](../../doc/models/type-84-enum.md) | Required | Type of document, used when providing an ID number or uploading a document. The possible values depend on the legal entity type.<br><br>* For **organization**, the `type` values can be **proofOfAddress**, **registrationDocument**, **vatDocument**, **proofOfOrganizationTaxInfo**, **proofOfOwnership**, **proofOfIndustry**, **proofOfSignatory**, **proofOfDirector**, or **proofOfFundingOrWealthSource**.<br><br>* For **individual**, the `type` values can be **identityCard**, **driversLicense**, **passport**, **liveSelfie**, **proofOfNationalIdNumber**, **proofOfResidency**, **proofOfIndustry**, **proofOfIndividualTaxId**, **proofOfFundingOrWealthSource** or **proofOfRelationship**.<br><br>* For **soleProprietorship**, the `type` values can be **constitutionalDocument**, **proofOfAddress**, or **proofOfIndustry**.<br><br>* For **trust**, the `type` value is **constitutionalDocument**.<br><br>* For **unincorporatedPartnership**, the `type` value is **constitutionalDocument**.<br><br>* Use **bankStatement** to upload documents for a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id). |

## Example

```ts
import { Document, Type84Enum } from 'adyen';

const document: Document = {
  description: 'description6',
  type: Type84Enum.Passport,
  attachment: {
    content: 'content2',
    contentType: 'contentType4',
    filename: 'filename0',
    pageName: 'pageName0',
    pageType: 'pageType6',
  },
  attachments: [
    {
      content: 'content4',
      contentType: 'contentType6',
      filename: 'filename2',
      pageName: 'pageName2',
      pageType: 'pageType8',
    },
    {
      content: 'content4',
      contentType: 'contentType6',
      filename: 'filename2',
      pageName: 'pageName2',
      pageType: 'pageType8',
    },
    {
      content: 'content4',
      contentType: 'contentType6',
      filename: 'filename2',
      pageName: 'pageName2',
      pageType: 'pageType8',
    }
  ],
  expiryDate: 'expiryDate4',
  fileName: 'fileName0',
};
```


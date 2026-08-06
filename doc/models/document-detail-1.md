
# Document Detail 1

Details of the document being submitted.

*This model accepts additional fields of type unknown.*

## Structure

`DocumentDetail1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string \| undefined` | Optional | The code of account holder, to which the document applies. |
| `bankAccountUuid` | `string \| undefined` | Optional | The Adyen-generated [`bankAccountUUID`](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder__resParam_accountHolderDetails-bankAccountDetails-bankAccountUUID) to which the document must be linked. Refer to [Bank account check](https://docs.adyen.com/classic-platforms/verification-checks/bank-account-check#uploading-a-bank-statement) for details on when a document should be submitted.<br><br>> Required if the `documentType` is **BANK_STATEMENT**, where a document is being submitted in order to verify a bank account. |
| `description` | `string \| undefined` | Optional | Description of the document. |
| `documentType` | [`DocumentType`](../../doc/models/document-type.md) | Required | - |
| `filename` | `string \| undefined` | Optional | Filename of the document. |
| `legalArrangementCode` | `string \| undefined` | Optional | The Adyen-generated [`legalArrangementCode`](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder__resParam_accountHolderDetails-legalArrangements-legalArrangementCode) to which the document must be linked. |
| `legalArrangementEntityCode` | `string \| undefined` | Optional | The Adyen-generated [`legalArrangementEntityCode`](https://docs.adyen.com/api-explorer/#/Account/v6/post/createAccountHolder__resParam_accountHolderDetails-legalArrangements-legalArrangementEntities-legalArrangementEntityCode)  to which the document must be linked. |
| `shareholderCode` | `string \| undefined` | Optional | The Adyen-generated [`shareholderCode`](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder__resParam_accountHolderDetails-businessDetails-shareholders-shareholderCode) to which the document must be linked. Refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-checks) for details on when a document should be submitted.<br><br>> Required if the account holder has a `legalEntity` of type **Business** and the `documentType` is either **PASSPORT**, **ID_CARD_FRONT**, **ID_CARD_BACK**, **DRIVING_LICENCE_FRONT**, or **DRIVING_LICENCE_BACK**. |
| `signatoryCode` | `string \| undefined` | Optional | The Adyen-generated [`signatoryCode`](https://docs.adyen.com/api-explorer/#/Account/v6/post/createAccountHolder__resParam_accountHolderDetails-businessDetails-signatories-signatoryCode) to which the document must be linked. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DocumentDetail1, DocumentType } from 'adyen';

const documentDetail1: DocumentDetail1 = {
  documentType: DocumentType.BankStatement,
  accountHolderCode: 'accountHolderCode0',
  bankAccountUuid: 'bankAccountUUID0',
  description: 'description4',
  filename: 'filename6',
  legalArrangementCode: 'legalArrangementCode6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


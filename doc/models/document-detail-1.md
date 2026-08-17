
# Document Detail 1

Details of the document being submitted.

## Structure

`DocumentDetail1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string \| undefined` | Optional | The code of account holder, to which the document applies. |
| `bankAccountUUID` | `string \| undefined` | Optional | The Adyen-generated [`bankAccountUUID`](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder__resParam_accountHolderDetails-bankAccountDetails-bankAccountUUID) to which the document must be linked. Refer to [Bank account check](https://docs.adyen.com/classic-platforms/verification-checks/bank-account-check#uploading-a-bank-statement) for details on when a document should be submitted.<br><br>> Required if the `documentType` is **BANK_STATEMENT**, where a document is being submitted in order to verify a bank account. |
| `description` | `string \| undefined` | Optional | Description of the document. |
| `documentType` | [`DocumentTypeEnum`](../../doc/models/document-type-enum.md) | Required | The type of the document. Refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-checks) for details on when each document type should be submitted and for the accepted file formats.<br><br>Permitted values:<br><br>* **BANK_STATEMENT**: A file containing a bank statement or other document proving ownership of a specific bank account.<br>* **COMPANY_REGISTRATION_SCREENING** (Supported from v5 and later): A file containing a company registration document.<br>* **CONSTITUTIONAL_DOCUMENT**: A file containing information about the account holder's legal arrangement.<br>* **PASSPORT**: A file containing the identity page(s) of a passport.<br>* **ID_CARD_FRONT**: A file containing only the front of the ID card. In order for a document to be usable, both the **ID_CARD_FRONT** and **ID_CARD_BACK** must be submitted.<br>* **ID_CARD_BACK**: A file containing only the back of the ID card. In order for a document to be usable, both the **ID_CARD_FRONT** and **ID_CARD_BACK** must be submitted.<br>* **DRIVING_LICENCE_FRONT**: A file containing only the front of the driving licence. In order for a document to be usable, both the **DRIVING_LICENCE_FRONT** and **DRIVING_LICENCE_BACK** must be submitted.<br>* **DRIVING_LICENCE_BACK**: A file containing only the back of the driving licence. In order for a document to be usable, both the **DRIVING_LICENCE_FRONT** and **DRIVING_LICENCE_FRONT** must be submitted. |
| `filename` | `string \| undefined` | Optional | Filename of the document. |
| `legalArrangementCode` | `string \| undefined` | Optional | The Adyen-generated [`legalArrangementCode`](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder__resParam_accountHolderDetails-legalArrangements-legalArrangementCode) to which the document must be linked. |
| `legalArrangementEntityCode` | `string \| undefined` | Optional | The Adyen-generated [`legalArrangementEntityCode`](https://docs.adyen.com/api-explorer/#/Account/v6/post/createAccountHolder__resParam_accountHolderDetails-legalArrangements-legalArrangementEntities-legalArrangementEntityCode)  to which the document must be linked. |
| `shareholderCode` | `string \| undefined` | Optional | The Adyen-generated [`shareholderCode`](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder__resParam_accountHolderDetails-businessDetails-shareholders-shareholderCode) to which the document must be linked. Refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-checks) for details on when a document should be submitted.<br><br>> Required if the account holder has a `legalEntity` of type **Business** and the `documentType` is either **PASSPORT**, **ID_CARD_FRONT**, **ID_CARD_BACK**, **DRIVING_LICENCE_FRONT**, or **DRIVING_LICENCE_BACK**. |
| `signatoryCode` | `string \| undefined` | Optional | The Adyen-generated [`signatoryCode`](https://docs.adyen.com/api-explorer/#/Account/v6/post/createAccountHolder__resParam_accountHolderDetails-businessDetails-signatories-signatoryCode) to which the document must be linked. |

## Example

```ts
import { DocumentDetail1, DocumentTypeEnum } from 'adyen';

const documentDetail1: DocumentDetail1 = {
  documentType: DocumentTypeEnum.BANKSTATEMENT,
  accountHolderCode: 'accountHolderCode0',
  bankAccountUUID: 'bankAccountUUID0',
  description: 'description4',
  filename: 'filename6',
  legalArrangementCode: 'legalArrangementCode6',
};
```


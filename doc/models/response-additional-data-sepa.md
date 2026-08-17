
# Response Additional Data Sepa

## Structure

`ResponseAdditionalDataSepa`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sepadirectdebitDateOfSignature` | `string \| undefined` | Optional | The transaction signature date.<br><br>Format: yyyy-MM-dd |
| `sepadirectdebitMandateId` | `string \| undefined` | Optional | Its value corresponds to the pspReference value of the transaction. |
| `sepadirectdebitSepadirectdebitDueDate` | `string \| undefined` | Optional | The date that the the shopper's bank account is charged. |
| `sepadirectdebitSequenceType` | `string \| undefined` | Optional | This field can take one of the following values:<br><br>* OneOff: (OOFF) Direct debit instruction to initiate exactly one direct debit transaction.<br><br>* First: (FRST) Initial/first collection in a series of direct debit instructions.<br><br>* Recurring: (RCUR) Direct debit instruction to carry out regular direct debit transactions initiated by the creditor.<br><br>* Final: (FNAL) Last/final collection in a series of direct debit instructions.<br><br>Example: OOFF |

## Example

```ts
import { ResponseAdditionalDataSepa } from 'adyen';

const responseAdditionalDataSepa: ResponseAdditionalDataSepa = {
  sepadirectdebitDateOfSignature: 'sepadirectdebit.dateOfSignature8',
  sepadirectdebitMandateId: 'sepadirectdebit.mandateId2',
  sepadirectdebitSepadirectdebitDueDate: 'sepadirectdebit.sepadirectdebit.dueDate6',
  sepadirectdebitSequenceType: 'sepadirectdebit.sequenceType0',
};
```


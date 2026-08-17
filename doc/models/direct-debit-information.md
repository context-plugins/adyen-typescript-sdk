
# Direct Debit Information

## Structure

`DirectDebitInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dateOfSignature` | `string \| undefined` | Optional | The date when the direct debit mandate was accepted by your user, in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format. |
| `dueDate` | `string \| undefined` | Optional | The date when the funds are deducted from your user's balance account. |
| `mandateId` | `string \| undefined` | Optional | Your unique identifier for the direct debit mandate. |
| `sequenceType` | `string \| undefined` | Optional | Identifies the direct debit transfer's type.<br>Possible values: **OneOff**, **First**, **Recurring**, **Final**. |

## Example

```ts
import { DirectDebitInformation } from 'adyen';

const directDebitInformation: DirectDebitInformation = {
  dateOfSignature: '2016-03-13T12:52:32.123Z',
  dueDate: '2016-03-13T12:52:32.123Z',
  mandateId: 'mandateId4',
  sequenceType: 'sequenceType8',
};
```


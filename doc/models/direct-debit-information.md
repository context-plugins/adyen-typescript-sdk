
# Direct Debit Information

*This model accepts additional fields of type unknown.*

## Structure

`DirectDebitInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dateOfSignature` | `string \| undefined` | Optional | The date when the direct debit mandate was accepted by your user, in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format. |
| `dueDate` | `string \| undefined` | Optional | The date when the funds are deducted from your user's balance account. |
| `mandateId` | `string \| undefined` | Optional | Your unique identifier for the direct debit mandate. |
| `sequenceType` | `string \| undefined` | Optional | Identifies the direct debit transfer's type.<br>Possible values: **OneOff**, **First**, **Recurring**, **Final**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DirectDebitInformation } from 'adyenlib';

const directDebitInformation: DirectDebitInformation = {
  dateOfSignature: '2016-03-13T12:52:32.123Z',
  dueDate: '2016-03-13T12:52:32.123Z',
  mandateId: 'mandateId4',
  sequenceType: 'sequenceType8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```



# Direct Debit Information 1

The details of the direct debit.

*This model accepts additional fields of type unknown.*

## Structure

`DirectDebitInformation1`

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
import { DirectDebitInformation1 } from 'adyenlib';

const directDebitInformation1: DirectDebitInformation1 = {
  dateOfSignature: '2016-03-13T12:52:32.123Z',
  dueDate: '2016-03-13T12:52:32.123Z',
  mandateId: 'mandateId2',
  sequenceType: 'sequenceType0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


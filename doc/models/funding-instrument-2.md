
# Funding Instrument 2

Details of the card or token used to fund the pay-in transaction.

*This model accepts additional fields of type unknown.*

## Structure

`FundingInstrument2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardIdentification` | [`CardIdentification \| undefined`](../../doc/models/card-identification.md) | Optional | - |
| `networkPaymentReference` | `string \| undefined` | Optional | The unique reference assigned by the card network for the pay-in transaction. |
| `reference` | `string \| undefined` | Optional | Your internal reference that identifies this funding instrument. Required if `sourceOfFunds` is **DEPOSIT_ACCOUNT**. |
| `sourceOfFunds` | [`SourceOfFunds2 \| undefined`](../../doc/models/source-of-funds-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FundingInstrument2, SourceOfFunds2 } from 'adyenlib';

const fundingInstrument2: FundingInstrument2 = {
  cardIdentification: {
    expiryMonth: 'expiryMonth2',
    expiryYear: 'expiryYear2',
    issueNumber: 'issueNumber0',
    number: 'number6',
    startMonth: 'startMonth8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  networkPaymentReference: 'networkPaymentReference8',
  reference: 'reference6',
  sourceOfFunds: SourceOfFunds2.Debit,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


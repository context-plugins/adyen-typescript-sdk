
# Funding Instrument

*This model accepts additional fields of type unknown.*

## Structure

`FundingInstrument`

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
import { FundingInstrument, SourceOfFunds2 } from 'adyen';

const fundingInstrument: FundingInstrument = {
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
  networkPaymentReference: 'networkPaymentReference0',
  reference: 'reference6',
  sourceOfFunds: SourceOfFunds2.Debit,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```



# Transfer Instrument Reference

*This model accepts additional fields of type unknown.*

## Structure

`TransferInstrumentReference`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountIdentifier` | `string` | Required | The masked IBAN or bank account number. |
| `id` | `string` | Required | The unique identifier of the resource. |
| `realLastFour` | `string \| undefined` | Optional | Four last digits of the bank account number. If the transfer instrument is created using [instant bank account verification](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-08-hosted-onboarding), and it is a virtual bank account, these digits may be different from the last four digits of the masked account number. |
| `trustedSource` | `boolean \| undefined` | Optional, Read-only | Identifies if the bank account was created through [instant bank verification](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-08-hosted-onboarding). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TransferInstrumentReference } from 'adyen';

const transferInstrumentReference: TransferInstrumentReference = {
  accountIdentifier: 'accountIdentifier8',
  id: 'id6',
  realLastFour: 'realLastFour4',
  trustedSource: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


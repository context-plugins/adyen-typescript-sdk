
# Donation Request

*This model accepts additional fields of type unknown.*

## Structure

`DonationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `donationAccount` | `string` | Required | The Adyen account name of the charity. |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `modificationAmount` | [`ModificationAmount`](../../doc/models/modification-amount.md) | Required | - |
| `originalReference` | `string \| undefined` | Optional | The original pspReference of the payment to modify.<br>This reference is returned in:<br><br>* authorisation response<br>* authorisation notification |
| `platformChargebackLogic` | [`PlatformChargebackLogic1 \| undefined`](../../doc/models/platform-chargeback-logic-1.md) | Optional | - |
| `reference` | `string \| undefined` | Optional | Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Behavior, DonationRequest } from 'adyen';

const donationRequest: DonationRequest = {
  donationAccount: 'donationAccount8',
  merchantAccount: 'merchantAccount6',
  modificationAmount: {
    currency: 'currency6',
    value: BigInt(92),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  originalReference: 'originalReference2',
  platformChargebackLogic: {
    behavior: Behavior.DeductFromOneBalanceAccount,
    costAllocationAccount: 'costAllocationAccount8',
    targetAccount: 'targetAccount6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  reference: 'reference0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


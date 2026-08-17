
# Donation Request

## Structure

`DonationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `donationAccount` | `string` | Required | The Adyen account name of the charity. |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `modificationAmount` | [`Amount`](../../doc/models/amount.md) | Required | The amount to be donated.The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount. |
| `originalReference` | `string \| undefined` | Optional | The original pspReference of the payment to modify.<br>This reference is returned in:<br><br>* authorisation response<br>* authorisation notification |
| `platformChargebackLogic` | [`PlatformChargebackLogic \| undefined`](../../doc/models/platform-chargeback-logic.md) | Optional | Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model). |
| `reference` | `string \| undefined` | Optional | Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters. |

## Example

```ts
import { BehaviorEnum, DonationRequest } from 'adyen';

const donationRequest: DonationRequest = {
  donationAccount: 'donationAccount8',
  merchantAccount: 'merchantAccount6',
  modificationAmount: {
    currency: 'currency6',
    value: BigInt(92),
  },
  originalReference: 'originalReference2',
  platformChargebackLogic: {
    behavior: BehaviorEnum.DeductFromOneBalanceAccount,
    costAllocationAccount: 'costAllocationAccount8',
    targetAccount: 'targetAccount6',
  },
  reference: 'reference0',
};
```


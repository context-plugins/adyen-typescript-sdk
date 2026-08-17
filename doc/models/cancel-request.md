
# Cancel Request

## Structure

`CancelRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be required for a particular modification request.<br><br>The additionalData object consists of entries, each of which includes the key and value. |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `mpiData` | [`ThreeDSecureData \| undefined`](../../doc/models/three-d-secure-data.md) | Optional | Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes Bancaires). |
| `originalMerchantReference` | `string \| undefined` | Optional | The original merchant reference to cancel. |
| `originalReference` | `string` | Required | The original pspReference of the payment to modify.<br>This reference is returned in:<br><br>* authorisation response<br>* authorisation notification |
| `platformChargebackLogic` | [`PlatformChargebackLogic \| undefined`](../../doc/models/platform-chargeback-logic.md) | Optional | Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model). |
| `reference` | `string \| undefined` | Optional | Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters. |
| `splits` | [`Split[] \| undefined`](../../doc/models/split.md) | Optional | An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to split payments for [platforms](https://docs.adyen.com/platforms/automatic-split-configuration/). |
| `tenderReference` | `string \| undefined` | Optional | The transaction reference provided by the PED. For point-of-sale integrations only. |
| `uniqueTerminalId` | `string \| undefined` | Optional | Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only. |

## Example

```ts
import {
  AuthenticationResponseEnum,
  BehaviorEnum,
  CancelRequest,
  ChallengeCancelEnum,
  DirectoryResponseEnum,
} from 'adyen';

const cancelRequest: CancelRequest = {
  merchantAccount: 'merchantAccount8',
  originalReference: 'originalReference6',
  additionalData: {
    'key0': 'additionalData0',
    'key1': 'additionalData1'
  },
  mpiData: {
    authenticationResponse: AuthenticationResponseEnum.U,
    cavv: 'cavv0',
    cavvAlgorithm: 'cavvAlgorithm0',
    challengeCancel: ChallengeCancelEnum.Enum07,
    directoryResponse: DirectoryResponseEnum.U,
  },
  originalMerchantReference: 'originalMerchantReference4',
  platformChargebackLogic: {
    behavior: BehaviorEnum.DeductFromOneBalanceAccount,
    costAllocationAccount: 'costAllocationAccount8',
    targetAccount: 'targetAccount6',
  },
  reference: 'reference4',
};
```


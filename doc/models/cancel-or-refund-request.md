
# Cancel or Refund Request

*This model accepts additional fields of type unknown.*

## Structure

`CancelOrRefundRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be required for a particular modification request.<br><br>The additionalData object consists of entries, each of which includes the key and value. |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `mpiData` | [`MpiData \| undefined`](../../doc/models/mpi-data.md) | Optional | - |
| `originalMerchantReference` | `string \| undefined` | Optional | The original merchant reference to cancel. |
| `originalReference` | `string` | Required | The original pspReference of the payment to modify.<br>This reference is returned in:<br><br>* authorisation response<br>* authorisation notification |
| `platformChargebackLogic` | [`PlatformChargebackLogic1 \| undefined`](../../doc/models/platform-chargeback-logic-1.md) | Optional | - |
| `reference` | `string \| undefined` | Optional | Your reference for the payment modification. This reference is visible in Customer Area and in reports.<br>Maximum length: 80 characters. |
| `tenderReference` | `string \| undefined` | Optional | The transaction reference provided by the PED. For point-of-sale integrations only. |
| `uniqueTerminalId` | `string \| undefined` | Optional | Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AuthenticationResponse,
  Behavior,
  CancelOrRefundRequest,
  ChallengeCancel,
  DirectoryResponse,
} from 'adyen';

const cancelOrRefundRequest: CancelOrRefundRequest = {
  merchantAccount: 'merchantAccount6',
  originalReference: 'originalReference2',
  additionalData: {
    'key0': 'additionalData4'
  },
  mpiData: {
    authenticationResponse: AuthenticationResponse.U,
    cavv: 'cavv0',
    cavvAlgorithm: 'cavvAlgorithm0',
    challengeCancel: ChallengeCancel.Enum07,
    directoryResponse: DirectoryResponse.U,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  originalMerchantReference: 'originalMerchantReference8',
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


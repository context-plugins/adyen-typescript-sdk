
# Mpi Data

*This model accepts additional fields of type unknown.*

## Structure

`MpiData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authenticationResponse` | [`AuthenticationResponse \| undefined`](../../doc/models/authentication-response.md) | Optional | - |
| `cavv` | `string \| undefined` | Optional | The cardholder authentication value (base64 encoded, 20 bytes in a decoded form). |
| `cavvAlgorithm` | `string \| undefined` | Optional | The CAVV algorithm used. Include this only for 3D Secure 1. |
| `challengeCancel` | [`ChallengeCancel \| undefined`](../../doc/models/challenge-cancel.md) | Optional | - |
| `directoryResponse` | [`DirectoryResponse \| undefined`](../../doc/models/directory-response.md) | Optional | - |
| `dsTransId` | `string \| undefined` | Optional | Supported for 3D Secure 2. The unique transaction identifier assigned by the Directory Server (DS) to identify a single transaction. |
| `eci` | `string \| undefined` | Optional | The electronic commerce indicator. |
| `riskScore` | `string \| undefined` | Optional | Risk score calculated by Directory Server (DS). Required for Cartes Bancaires integrations. |
| `threeDsVersion` | `string \| undefined` | Optional | The version of the 3D Secure protocol. |
| `tokenAuthenticationVerificationValue` | `string \| undefined` | Optional | Network token authentication verification value (TAVV). The network token cryptogram. |
| `transStatusReason` | `string \| undefined` | Optional | Provides information on why the `transStatus` field has the specified value. For possible values, refer to [our docs](https://docs.adyen.com/online-payments/3d-secure/api-reference#possible-transstatusreason-values). |
| `xid` | `string \| undefined` | Optional | Supported for 3D Secure 1. The transaction identifier (Base64-encoded, 20 bytes in a decoded form). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AuthenticationResponse,
  ChallengeCancel,
  DirectoryResponse,
  MpiData,
} from 'adyen';

const mpiData: MpiData = {
  authenticationResponse: AuthenticationResponse.U,
  cavv: 'cavv0',
  cavvAlgorithm: 'cavvAlgorithm0',
  challengeCancel: ChallengeCancel.Enum07,
  directoryResponse: DirectoryResponse.U,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


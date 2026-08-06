
# Authentication Data

*This model accepts additional fields of type unknown.*

## Structure

`AuthenticationData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attemptAuthentication` | [`AttemptAuthentication \| undefined`](../../doc/models/attempt-authentication.md) | Optional | - |
| `authenticationOnly` | `boolean \| undefined` | Optional | Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorization.<br>Default: **false**.<br><br>**Default**: `false` |
| `threeDsRequestData` | [`ThreeDsRequestData \| undefined`](../../doc/models/three-ds-request-data.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AttemptAuthentication,
  AuthenticationData,
  ChallengeWindowSize,
  DataOnly,
  NativeThreeDs,
  ThreeDsVersion,
} from 'adyen';

const authenticationData: AuthenticationData = {
  attemptAuthentication: AttemptAuthentication.Always,
  authenticationOnly: false,
  threeDsRequestData: {
    challengeWindowSize: ChallengeWindowSize.Enum03,
    dataOnly: DataOnly.False,
    nativeThreeDs: NativeThreeDs.Preferred,
    threeDsVersion: ThreeDsVersion.Enum210,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


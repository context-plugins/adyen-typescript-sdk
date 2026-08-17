
# Authentication Data 3

Data for 3DS authentication.

## Structure

`AuthenticationData3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attemptAuthentication` | [`AttemptAuthenticationEnum \| undefined`](../../doc/models/attempt-authentication-enum.md) | Optional | Indicates when 3D Secure authentication should be attempted. This overrides all other rules, including [Dynamic 3D Secure settings](https://docs.adyen.com/risk-management/dynamic-3d-secure).<br><br>Possible values:<br><br>* **always**: Perform 3D Secure authentication.<br>* **never**: Don't perform 3D Secure authentication. If PSD2 SCA or other national regulations require authentication, the transaction gets declined. |
| `authenticationOnly` | `boolean \| undefined` | Optional | Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorization.<br>Default: **false**.<br><br>**Default**: `false` |
| `threeDSRequestData` | [`ThreeDSRequestData2 \| undefined`](../../doc/models/three-ds-request-data-2.md) | Optional | Object with additional parameters for the 3D Secure authentication flow. |

## Example

```ts
import {
  AttemptAuthenticationEnum,
  AuthenticationData3,
  ChallengeWindowSizeEnum,
  DataOnlyEnum,
  NativeThreeDSEnum,
  ThreeDSVersionEnum,
} from 'adyen';

const authenticationData3: AuthenticationData3 = {
  attemptAuthentication: AttemptAuthenticationEnum.Always,
  authenticationOnly: false,
  threeDSRequestData: {
    challengeWindowSize: ChallengeWindowSizeEnum.Enum03,
    dataOnly: DataOnlyEnum.False,
    nativeThreeDS: NativeThreeDSEnum.Preferred,
    threeDSVersion: ThreeDSVersionEnum.Enum210,
  },
};
```


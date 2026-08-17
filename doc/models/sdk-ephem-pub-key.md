
# SDK Ephem Pub Key

The `sdkEphemPubKey` value as received from the 3D Secure 2 SDK.
Required for `deviceChannel` set to **app**.

## Structure

`SDKEphemPubKey`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `crv` | `string \| undefined` | Optional | The `crv` value as received from the 3D Secure 2 SDK. |
| `kty` | `string \| undefined` | Optional | The `kty` value as received from the 3D Secure 2 SDK. |
| `x` | `string \| undefined` | Optional | The `x` value as received from the 3D Secure 2 SDK. |
| `y` | `string \| undefined` | Optional | The `y` value as received from the 3D Secure 2 SDK. |

## Example

```ts
import { SDKEphemPubKey } from 'adyen';

const sDKEphemPubKey: SDKEphemPubKey = {
  crv: 'crv8',
  kty: 'kty8',
  x: 'x0',
  y: 'y8',
};
```


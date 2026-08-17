
# SDK Ephem Pub Key 1

The `sdkEphemPubKey` value as received from the 3D Secure 2 SDK.

## Structure

`SDKEphemPubKey1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `crv` | `string \| undefined` | Optional | The `crv` value as received from the 3D Secure 2 SDK. |
| `kty` | `string \| undefined` | Optional | The `kty` value as received from the 3D Secure 2 SDK. |
| `x` | `string \| undefined` | Optional | The `x` value as received from the 3D Secure 2 SDK. |
| `y` | `string \| undefined` | Optional | The `y` value as received from the 3D Secure 2 SDK. |

## Example

```ts
import { SDKEphemPubKey1 } from 'adyen';

const sDKEphemPubKey1: SDKEphemPubKey1 = {
  crv: 'crv6',
  kty: 'kty6',
  x: 'x4',
  y: 'y2',
};
```


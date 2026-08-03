
# Sdk Ephem Pub Key

The `sdkEphemPubKey` value as received from the 3D Secure 2 SDK.
Required for `deviceChannel` set to **app**.

*This model accepts additional fields of type unknown.*

## Structure

`SdkEphemPubKey`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `crv` | `string \| undefined` | Optional | The `crv` value as received from the 3D Secure 2 SDK. |
| `kty` | `string \| undefined` | Optional | The `kty` value as received from the 3D Secure 2 SDK. |
| `x` | `string \| undefined` | Optional | The `x` value as received from the 3D Secure 2 SDK. |
| `y` | `string \| undefined` | Optional | The `y` value as received from the 3D Secure 2 SDK. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SdkEphemPubKey } from 'adyenlib';

const sdkEphemPubKey: SdkEphemPubKey = {
  crv: 'crv6',
  kty: 'kty6',
  x: 'x4',
  y: 'y2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```



# Sdk Ephem Pub Key 1

The `sdkEphemPubKey` value as received from the 3D Secure 2 SDK.

*This model accepts additional fields of type unknown.*

## Structure

`SdkEphemPubKey1`

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
import { SdkEphemPubKey1 } from 'adyenlib';

const sdkEphemPubKey1: SdkEphemPubKey1 = {
  crv: 'crv2',
  kty: 'kty2',
  x: 'x0',
  y: 'y8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


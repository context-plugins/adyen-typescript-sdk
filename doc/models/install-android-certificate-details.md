
# Install Android Certificate Details

*This model accepts additional fields of type unknown.*

## Structure

`InstallAndroidCertificateDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `certificateId` | `string \| undefined` | Optional | The unique identifier of the certificate to be installed. |
| `type` | [`Type42 \| undefined`](../../doc/models/type-42.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InstallAndroidCertificateDetails, Type42 } from 'adyenlib';

const installAndroidCertificateDetails: InstallAndroidCertificateDetails = {
  certificateId: 'certificateId2',
  type: Type42.InstallAndroidCertificate,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```



# Uninstall Android Certificate Details

*This model accepts additional fields of type unknown.*

## Structure

`UninstallAndroidCertificateDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `certificateId` | `string \| undefined` | Optional | The unique identifier of the certificate to be uninstalled. |
| `type` | [`Type82 \| undefined`](../../doc/models/type-82.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Type82, UninstallAndroidCertificateDetails } from 'adyen';

const uninstallAndroidCertificateDetails: UninstallAndroidCertificateDetails = {
  certificateId: 'certificateId0',
  type: Type82.UninstallAndroidCertificate,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```



# Uninstall Android Certificate Details

## Structure

`UninstallAndroidCertificateDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `certificateId` | `string \| undefined` | Optional | The unique identifier of the certificate to be uninstalled. |
| `type` | [`Type81Enum \| undefined`](../../doc/models/type-81-enum.md) | Optional | Type of terminal action: Uninstall an Android certificate.<br><br>**Default**: `Type81Enum.UninstallAndroidCertificate` |

## Example

```ts
import { Type81Enum, UninstallAndroidCertificateDetails } from 'adyen';

const uninstallAndroidCertificateDetails: UninstallAndroidCertificateDetails = {
  certificateId: 'certificateId0',
  type: Type81Enum.UninstallAndroidCertificate,
};
```


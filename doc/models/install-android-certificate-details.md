
# Install Android Certificate Details

## Structure

`InstallAndroidCertificateDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `certificateId` | `string \| undefined` | Optional | The unique identifier of the certificate to be installed. |
| `type` | [`Type42Enum \| undefined`](../../doc/models/type-42-enum.md) | Optional | Type of terminal action: Install an Android certificate.<br><br>**Default**: `Type42Enum.InstallAndroidCertificate` |

## Example

```ts
import { InstallAndroidCertificateDetails, Type42Enum } from 'adyen';

const installAndroidCertificateDetails: InstallAndroidCertificateDetails = {
  certificateId: 'certificateId2',
  type: Type42Enum.InstallAndroidCertificate,
};
```


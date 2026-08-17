
# Android Certificate

## Structure

`AndroidCertificate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | The description that was provided when uploading the certificate. |
| `extension` | `string \| undefined` | Optional | The file format of the certificate, as indicated by the file extension. For example, **.cert** or **.pem**. |
| `id` | `string` | Required | The unique identifier of the certificate. |
| `name` | `string \| undefined` | Optional | The file name of the certificate. For example, **mycert**. |
| `notAfter` | `string \| undefined` | Optional | The date when the certificate stops to be valid. |
| `notBefore` | `string \| undefined` | Optional | The date when the certificate starts to be valid. |
| `status` | `string \| undefined` | Optional | The status of the certificate. |

## Example

```ts
import { AndroidCertificate } from 'adyen';

const androidCertificate: AndroidCertificate = {
  id: 'id2',
  description: 'description2',
  extension: 'extension8',
  name: 'name2',
  notAfter: '2016-03-13T12:52:32.123Z',
  notBefore: '2016-03-13T12:52:32.123Z',
};
```


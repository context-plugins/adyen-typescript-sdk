
# Android Certificates Response

*This model accepts additional fields of type unknown.*

## Structure

`AndroidCertificatesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`AndroidCertificate[] \| undefined`](../../doc/models/android-certificate.md) | Optional | Uploaded Android certificates for Android payment terminals. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AndroidCertificatesResponse } from 'adyenlib';

const androidCertificatesResponse: AndroidCertificatesResponse = {
  data: [
    {
      id: 'id0',
      description: 'description0',
      extension: 'extension6',
      name: 'name0',
      notAfter: '2016-03-13T12:52:32.123Z',
      notBefore: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


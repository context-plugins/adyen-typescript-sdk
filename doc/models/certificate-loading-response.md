
# Certificate Loading Response

## Structure

`CertificateLoadingResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The unique identifier of the communication session. |
| `installationId` | `string \| undefined` | Optional | The unique identifier of the SDK installation. If you create the [Terminal API](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/) transaction request on your backend, use this as the `POIID` in the `MessageHeader` of the request. |
| `merchantAccount` | `string \| undefined` | Optional | The unique identifier of your merchant account. |
| `sdkData` | `string \| undefined` | Optional | The data that the SDK uses to authenticate responses from the Adyen payments platform. Pass this value to your POS app. |
| `store` | `string \| undefined` | Optional | The reference of the store that the transactions are processed for. |

## Example

```ts
import { CertificateLoadingResponse } from 'adyen';

const certificateLoadingResponse: CertificateLoadingResponse = {
  id: 'id0',
  installationId: 'installationId6',
  merchantAccount: 'merchantAccount2',
  sdkData: 'sdkData0',
  store: 'store0',
};
```


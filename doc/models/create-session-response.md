
# Create Session Response

*This model accepts additional fields of type unknown.*

## Structure

`CreateSessionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The unique identifier of the session. |
| `installationId` | `string \| undefined` | Optional | The unique identifier of the SDK installation. If you create the [Terminal API](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/) transaction request on your backend, use this as the `POIID` in the `MessageHeader` of the request. |
| `merchantAccount` | `string \| undefined` | Optional | The unique identifier of your merchant account. |
| `sdkData` | `string \| undefined` | Optional | The data that the SDK uses to authenticate responses from the Adyen payments platform. Pass this value to your POS app. |
| `store` | `string \| undefined` | Optional | The unique identifier of the store that you want to process transactions for. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreateSessionResponse } from 'adyenlib';

const createSessionResponse: CreateSessionResponse = {
  id: 'id0',
  installationId: 'installationId4',
  merchantAccount: 'merchantAccount2',
  sdkData: 'sdkData0',
  store: 'store0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```



# Get Network Token Response

## Structure

`GetNetworkTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | [`NetworkToken2`](../../doc/models/network-token-2.md) | Required | The details of the network token. |

## Example

```ts
import { GetNetworkTokenResponse } from 'adyen';

const getNetworkTokenResponse: GetNetworkTokenResponse = {
  token: {
    brandVariant: 'brandVariant8',
    creationDate: '2016-03-13T12:52:32.123Z',
    device: {
      formFactor: 'formFactor4',
      osName: 'osName6',
      phone: {
        hashedNumber: 'hashedNumber2',
        lastFourDigits: 'lastFourDigits8',
        number: 'number8',
      },
    },
    id: 'id6',
    paymentInstrumentId: 'paymentInstrumentId8',
  },
};
```


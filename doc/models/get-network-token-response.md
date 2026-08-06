
# Get Network Token Response

*This model accepts additional fields of type unknown.*

## Structure

`GetNetworkTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | [`NetworkToken`](../../doc/models/network-token.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

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
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    id: 'id6',
    paymentInstrumentId: 'paymentInstrumentId8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


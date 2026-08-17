
# List Network Tokens Response

## Structure

`ListNetworkTokensResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `networkTokens` | [`NetworkToken[] \| undefined`](../../doc/models/network-token.md) | Optional | List of network tokens. |

## Example

```ts
import { ListNetworkTokensResponse } from 'adyen';

const listNetworkTokensResponse: ListNetworkTokensResponse = {
  networkTokens: [
    {
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
    {
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
    {
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
    }
  ],
};
```


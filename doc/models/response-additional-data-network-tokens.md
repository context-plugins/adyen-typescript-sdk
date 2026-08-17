
# Response Additional Data Network Tokens

## Structure

`ResponseAdditionalDataNetworkTokens`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `networkTokenAvailable` | `string \| undefined` | Optional | Indicates whether a network token is available for the specified card. |
| `networkTokenBin` | `string \| undefined` | Optional | The Bank Identification Number of a tokenized card, which is the first six digits of a card number. |
| `networkTokenTokenSummary` | `string \| undefined` | Optional | The last four digits of a network token. |

## Example

```ts
import { ResponseAdditionalDataNetworkTokens } from 'adyen';

const responseAdditionalDataNetworkTokens: ResponseAdditionalDataNetworkTokens = {
  networkTokenAvailable: 'networkToken.available6',
  networkTokenBin: 'networkToken.bin4',
  networkTokenTokenSummary: 'networkToken.tokenSummary8',
};
```


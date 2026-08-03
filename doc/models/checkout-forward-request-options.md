
# Checkout Forward Request Options

*This model accepts additional fields of type unknown.*

## Structure

`CheckoutForwardRequestOptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountUpdate` | `boolean \| undefined` | Optional | Whether to check for a card account update (true) or not (false) |
| `dryRun` | `boolean \| undefined` | Optional | Set to **true** to receive a copy of the request Adyen is making to the third party in the response. Any sensitive information will be masked in the response you receive. This functionality is only available in the test environment. |
| `networkToken` | [`CheckoutNetworkTokenOption \| undefined`](../../doc/models/checkout-network-token-option.md) | Optional | - |
| `networkTxReferencePaths` | `string[] \| undefined` | Optional | Set in tokenize:true case when forwarding PAN. Addresses to the possible location(s) of networkTxReference in the incoming 3rd party response |
| `tokenize` | `boolean \| undefined` | Optional | Set to **true**, the payment details are [tokenized](https://docs.adyen.com/online-payments/tokenization). |
| `transactionLinkIdPaths` | `string[] \| undefined` | Optional | Set in tokenize:true case when forwarding PAN. Addresses to the possible location(s) of transactionLinkId in the incoming 3rd party response |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CheckoutForwardRequestOptions } from 'adyenlib';

const checkoutForwardRequestOptions: CheckoutForwardRequestOptions = {
  accountUpdate: false,
  dryRun: false,
  networkToken: {
    includeCryptogram: false,
    useNetworkToken: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  networkTxReferencePaths: [
    'networkTxReferencePaths1'
  ],
  tokenize: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


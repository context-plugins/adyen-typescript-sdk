
# Checkout Forward Request Options

## Structure

`CheckoutForwardRequestOptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountUpdate` | `boolean \| undefined` | Optional | Whether to check for a card account update (true) or not (false) |
| `dryRun` | `boolean \| undefined` | Optional | Set to **true** to receive a copy of the request Adyen is making to the third party in the response. Any sensitive information will be masked in the response you receive. This functionality is only available in the test environment. |
| `networkToken` | [`CheckoutNetworkTokenOption2 \| undefined`](../../doc/models/checkout-network-token-option-2.md) | Optional | The object that contains the details for forwarding a network token. |
| `networkTxReferencePaths` | `string[] \| undefined` | Optional | Set in tokenize:true case when forwarding PAN. Addresses to the possible location(s) of networkTxReference in the incoming 3rd party response |
| `tokenize` | `boolean \| undefined` | Optional | Set to **true**, the payment details are [tokenized](https://docs.adyen.com/online-payments/tokenization). |
| `transactionLinkIdPaths` | `string[] \| undefined` | Optional | Set in tokenize:true case when forwarding PAN. Addresses to the possible location(s) of transactionLinkId in the incoming 3rd party response |

## Example

```ts
import { CheckoutForwardRequestOptions } from 'adyen';

const checkoutForwardRequestOptions: CheckoutForwardRequestOptions = {
  accountUpdate: false,
  dryRun: false,
  networkToken: {
    includeCryptogram: false,
    useNetworkToken: false,
  },
  networkTxReferencePaths: [
    'networkTxReferencePaths1'
  ],
  tokenize: false,
};
```


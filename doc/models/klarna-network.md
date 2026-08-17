
# Klarna Network

## Structure

`KlarnaNetwork`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `klarnaNetworkData` | `string \| undefined` | Optional | A string containing a structured JSON object. This is a passthrough field used to enable custom features or data exchange with Klarna.<br><br>**Constraints**: *Maximum Length*: `10240` |
| `klarnaNetworkSessionToken` | `string \| undefined` | Optional | The token obtained from the Klarna SDK during an Express Checkout flow.<br><br>**Constraints**: *Maximum Length*: `10240` |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | `string` | Required, Constant | **klarna_network**<br><br>**Value**: `'klarna_network'` |

## Example

```ts
import { KlarnaNetwork } from 'adyen';

const klarnaNetwork: KlarnaNetwork = {
  type: 'klarna_network',
  checkoutAttemptId: 'checkoutAttemptId8',
  klarnaNetworkData: 'klarnaNetworkData8',
  klarnaNetworkSessionToken: 'klarnaNetworkSessionToken4',
  recurringDetailReference: 'recurringDetailReference2',
  sdkData: 'sdkData8',
};
```


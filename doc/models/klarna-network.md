
# Klarna Network

*This model accepts additional fields of type unknown.*

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
| `type` | [`Type69`](../../doc/models/type-69.md) | Required | **klarna_network** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { KlarnaNetwork, Type69 } from 'adyenlib';

const klarnaNetwork: KlarnaNetwork = {
  type: Type69.KlarnaNetwork,
  checkoutAttemptId: 'checkoutAttemptId8',
  klarnaNetworkData: 'klarnaNetworkData8',
  klarnaNetworkSessionToken: 'klarnaNetworkSessionToken4',
  recurringDetailReference: 'recurringDetailReference2',
  sdkData: 'sdkData8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


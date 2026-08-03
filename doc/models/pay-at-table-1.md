
# Pay at Table 1

Settings for [Pay-at-table](https://docs.adyen.com/point-of-sale/pay-at-x) features.

*This model accepts additional fields of type unknown.*

## Structure

`PayAtTable1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authenticationMethod` | [`AuthenticationMethod \| undefined`](../../doc/models/authentication-method.md) | Optional | - |
| `enablePayAtTable` | `boolean \| undefined` | Optional | Enable Pay at table. |
| `paymentInstrument` | `unknown \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AuthenticationMethod, PayAtTable1 } from 'adyenlib';

const payAtTable1: PayAtTable1 = {
  authenticationMethod: AuthenticationMethod.Magswipe,
  enablePayAtTable: false,
  paymentInstrument: { 'key1': 'val1', 'key2': 'val2' },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


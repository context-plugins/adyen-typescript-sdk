
# Pay at Table

*This model accepts additional fields of type unknown.*

## Structure

`PayAtTable`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authenticationMethod` | [`AuthenticationMethod \| undefined`](../../doc/models/authentication-method.md) | Optional | - |
| `enablePayAtTable` | `boolean \| undefined` | Optional | Enable Pay at table. |
| `paymentInstrument` | `unknown \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AuthenticationMethod, PayAtTable } from 'adyen';

const payAtTable: PayAtTable = {
  authenticationMethod: AuthenticationMethod.Magswipe,
  enablePayAtTable: false,
  paymentInstrument: { 'key1': 'val1', 'key2': 'val2' },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


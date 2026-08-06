
# Adyen Payment Source

*This model accepts additional fields of type unknown.*

## Structure

`AdyenPaymentSource`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Name of the field. For example, Name of External Platform. |
| `version` | `string \| undefined` | Optional | Version of the field. For example, Version of External Platform. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AdyenPaymentSource } from 'adyen';

const adyenPaymentSource: AdyenPaymentSource = {
  name: 'name2',
  version: 'version8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


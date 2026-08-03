
# Avs Address 1

Contains the billing address of the card holder. The address details need to be AVS-compliant, which means that you need to provide at least street address.

*This model accepts additional fields of type unknown.*

## Structure

`AvsAddress1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `streetAddress` | `string` | Required | The street and house number of the address.<br><br>Example: 1 Infinite Loop, Cupertino. |
| `zip` | `string \| undefined` | Optional | The zip or post code of the address.<br><br>Example: CA 95014 |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AvsAddress1 } from 'adyenlib';

const avsAddress1: AvsAddress1 = {
  streetAddress: 'streetAddress6',
  zip: 'zip0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


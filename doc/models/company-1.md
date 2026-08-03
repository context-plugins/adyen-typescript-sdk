
# Company 1

Information regarding the company.

*This model accepts additional fields of type unknown.*

## Structure

`Company1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `homepage` | `string \| undefined` | Optional | The company website's home page. |
| `name` | `string \| undefined` | Optional | The company name. |
| `registrationNumber` | `string \| undefined` | Optional | Registration number of the company. |
| `registryLocation` | `string \| undefined` | Optional | Registry location of the company. |
| `taxId` | `string \| undefined` | Optional | Tax ID of the company. |
| `type` | `string \| undefined` | Optional | The company type. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Company1 } from 'adyenlib';

const company1: Company1 = {
  homepage: 'homepage4',
  name: 'name8',
  registrationNumber: 'registrationNumber6',
  registryLocation: 'registryLocation0',
  taxId: 'taxId4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```


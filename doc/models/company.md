
# Company

## Structure

`Company`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `homepage` | `string \| undefined` | Optional | The company website's home page. |
| `name` | `string \| undefined` | Optional | The company name. |
| `registrationNumber` | `string \| undefined` | Optional | Registration number of the company. |
| `registryLocation` | `string \| undefined` | Optional | Registry location of the company. |
| `taxId` | `string \| undefined` | Optional | Tax ID of the company. |
| `type` | `string \| undefined` | Optional | The company type. |

## Example

```ts
import { Company } from 'adyen';

const company: Company = {
  homepage: 'homepage6',
  name: 'name0',
  registrationNumber: 'registrationNumber2',
  registryLocation: 'registryLocation2',
  taxId: 'taxId6',
};
```


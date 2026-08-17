
# US International Ach Priority Requirement

## Structure

`USInternationalAchPriorityRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Specifies that transactions deemed to be International ACH (IAT) per OFAC/NACHA rules cannot have fast priority. |
| `type` | `string` | Required, Constant | **usInternationalAchPriorityRequirement**<br><br>**Value**: `'usInternationalAchPriorityRequirement'` |

## Example

```ts
import { USInternationalAchPriorityRequirement } from 'adyen';

const uSInternationalAchPriorityRequirement: USInternationalAchPriorityRequirement = {
  type: 'usInternationalAchPriorityRequirement',
  description: 'description0',
};
```



# Allowed Level Enum

The capability level that is allowed for the account holder.

Possible values: **notApplicable**, **low**, **medium**, **high**., The capability level that is allowed for the legal entity.

Possible values: **notApplicable**, **low**, **medium**, **high**., The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.

Possible values: **notApplicable**, **low**, **medium**, **high**.

## Enumeration

`AllowedLevelEnum`

## Fields

| Name |
|  --- |
| `High` |
| `Low` |
| `Medium` |
| `NotApplicable` |

## Example

```ts
import { AllowedLevelEnum } from 'adyen';

const allowedLevel = AllowedLevelEnum.Medium;
```


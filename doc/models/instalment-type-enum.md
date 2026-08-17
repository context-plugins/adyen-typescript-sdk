
# Instalment Type Enum

Type of instalment transaction. For requesting an instalment payment transaction.
Possible values:

* **DeferredInstalments**
* **EqualInstalments**
* **InequalInstalments**

## Enumeration

`InstalmentTypeEnum`

## Fields

| Name |
|  --- |
| `DeferredInstalments` |
| `EqualInstalments` |
| `InequalInstalments` |

## Example

```ts
import { InstalmentTypeEnum } from 'adyen';

const instalmentType = InstalmentTypeEnum.EqualInstalments;
```


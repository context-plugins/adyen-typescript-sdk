
# Instalment Type

Type of instalment transaction. For requesting an instalment payment transaction.
Possible values:

* **DeferredInstalments**
* **EqualInstalments**
* **InequalInstalments**

## Enumeration

`InstalmentType`

## Fields

| Name |
|  --- |
| `DeferredInstalments` |
| `EqualInstalments` |
| `InequalInstalments` |

## Example

```ts
import { InstalmentType } from 'adyen';

const instalmentType = InstalmentType.EqualInstalments;
```


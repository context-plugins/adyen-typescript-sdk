
# Admin Request 2

Content of the Admin Request message.

## Structure

`AdminRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceIdentification` | `string \| undefined` | Optional | Identification of the administrative service to process.<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import { AdminRequest2 } from 'adyen';

const adminRequest2: AdminRequest2 = {
  serviceIdentification: 'ServiceIdentification0',
};
```


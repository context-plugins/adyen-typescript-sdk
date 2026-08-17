
# Admin Request

Empty.
Content of the Custom Admin Request message.

## Structure

`AdminRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceIdentification` | `string \| undefined` | Optional | Identification of the administrative service to process.<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import { AdminRequest } from 'adyen';

const adminRequest: AdminRequest = {
  serviceIdentification: 'ServiceIdentification4',
};
```


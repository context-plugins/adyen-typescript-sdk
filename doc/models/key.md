
# Key

## Structure

`Key`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identifier` | `string \| undefined` | Optional | The unique identifier of the shared key. |
| `passphrase` | `string \| undefined` | Optional | The secure passphrase to protect the shared key. Must consist of:<br><br>* At least 12 characters.<br><br>* At least 1 uppercase letter: `[A-Z]`.<br><br>* At least 1 lowercase letter: `[a-z]`.<br><br>* At least 1 digit: `[0-9]`.<br><br>* At least 1 special character. Limited to the following: `~`, `!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, `_`, `+`, `=`, `}`, `{`, `]`, `[`, `;`, `:`, `?`, `.`, `,`, `>`, `<`. |
| `version` | `number \| undefined` | Optional | The version number of the shared key. |

## Example

```ts
import { Key } from 'adyen';

const key: Key = {
  identifier: 'identifier8',
  passphrase: 'passphrase0',
  version: 204,
};
```


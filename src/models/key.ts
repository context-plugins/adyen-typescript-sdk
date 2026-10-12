import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Key = {
  /** The unique identifier of the shared key. */
  identifier?: string;
  /**
   * The secure passphrase to protect the shared key. Must consist of:
   *
   * * At least 12 characters.
   *
   * * At least 1 uppercase letter: `[A-Z]`.
   *
   * * At least 1 lowercase letter: `[a-z]`.
   *
   * * At least 1 digit: `[0-9]`.
   *
   *  * At least 1 special character. Limited to the following: `~`, `!`, `@`, `#`, `$`, `%`, `^`,
   *    `&`, `*`, `(`, `)`, `_`, `+`, `=`, `}`, `{`, `]`, `[`, `;`, `:`, `?`, `.`, `,`, `>`, `<`.
   */
  passphrase?: string;
  /** The version number of the shared key. */
  version?: number;
};

export const keySchema: Schema<Key> = s.object<Key>({
  identifier: s.optional(s.string()),
  passphrase: s.optional(s.string()),
  version: s.optional(s.int()),
});

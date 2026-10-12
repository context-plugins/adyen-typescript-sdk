import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The key you share with Adyen to secure local communications when using Terminal API. */
export type Key1 = {
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

export const key1Schema: Schema<Key1> = s.object<Key1>({
  identifier: s.optional(s.string()),
  passphrase: s.optional(s.string()),
  version: s.optional(s.int()),
});

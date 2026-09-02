import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UkLocalMandateAccountIdentification = {
  type: string;
  accountNumber: string;
  sortCode: string;
};

export const ukLocalMandateAccountIdentificationSchema: Schema<UkLocalMandateAccountIdentification> =
  s.object<UkLocalMandateAccountIdentification>({
    type: s.string(),
    accountNumber: s.string(),
    sortCode: s.string(),
  });

export type CharacterDialogEntry = {
  lines: string[];
  image?: string;
};

export type CharacterDialogMap = Record<string, CharacterDialogEntry>;
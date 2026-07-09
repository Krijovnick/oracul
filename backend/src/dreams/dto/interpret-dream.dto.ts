export type DreamDictionaryId =
  | 'freudian'
  | 'jungian'
  | 'miller'
  | 'vanga'
  | 'nostradamus'
  | 'loff'
  | 'esoteric'
  | 'islamic'
  | 'vedic'
  | 'chinese';

export interface InterpretDreamDto {
  dictionaryId: DreamDictionaryId;
  description: string;
  locale?: string;
}

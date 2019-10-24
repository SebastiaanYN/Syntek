import { SymbolEntry } from './SymbolEntry';

export class SymbolType {
  readonly type: SymbolEntry;

  readonly generics: SymbolType[];

  readonly arrayDepth: number;

  constructor(type: SymbolEntry, generics: SymbolType[], arrayDepth: number) {
    this.type = type;
    this.generics = generics;
    this.arrayDepth = arrayDepth;
  }
}

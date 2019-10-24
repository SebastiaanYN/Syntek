import * as grammar from '../../grammar';

import { Scope } from './Scope';
import { SymbolTable } from '../symbols/SymbolTable';
import { SymbolEntry } from '../symbols/SymbolEntry';

export class ClassScope extends Scope<grammar.ClassDeclaration> {
  private readonly staticSymbols = new SymbolTable();

  getSymbol(name: string): SymbolEntry | undefined {
    if (this.node.genericParams.some(generic => generic.lexeme === name)) {
      return this.getOwnSymbol(name);
    }

    if (this.parent) {
      return this.parent.getSymbol(name);
    }

    return undefined;
  }

  getOwnStaticSymbol(name: string): SymbolEntry | undefined {
    return this.staticSymbols.get(name);
  }

  build(): void {
    this.node.genericParams
      .forEach(generic => this.table.add(generic.lexeme, new SymbolEntry(this.node, this)));

    this.node.staticBody.forEach(prop => this.add(prop.value, this.staticSymbols));
    this.node.instanceBody.forEach(prop => this.add(prop.value));
  }
}

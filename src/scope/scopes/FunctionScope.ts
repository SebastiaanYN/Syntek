import * as grammar from '../../grammar';

import { Scope } from './Scope';
import { SymbolEntry } from '../symbols/SymbolEntry';

type Func = grammar.FunctionDeclaration | grammar.EmptyFunctionDeclaration;

export class FunctionScope extends Scope<Func> {
  build(): void {
    this.node.genericParams
      .forEach(generic => this.table.add(generic.lexeme, new SymbolEntry(this.node, this)));

    this.node.params.forEach(param => this.add(param));

    if (this.node instanceof grammar.FunctionDeclaration) {
      this.node.body.forEach(node => this.add(node));
    }
  }
}

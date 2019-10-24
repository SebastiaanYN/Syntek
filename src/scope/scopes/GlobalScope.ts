import * as grammar from '../../grammar';

import { Scope } from './Scope';
import { SymbolEntry } from '../symbols/SymbolEntry';

export class GlobalScope extends Scope<grammar.NativeNode> {
  constructor() {
    super(new grammar.NativeNode());

    this.build();
  }

  build(): void {
    [
      // Functions
      'print',
      'range',

      // Classes
      'Object',
      'Class',
      'Number',
      'String',
      'Boolean',
      'Optional',
      'Array',
      'Function',
      'VoidFunction',
      'Error',
      'Promise',
    ].forEach((builtin) => {
      this.table.add(builtin, new SymbolEntry(new grammar.NativeNode(), this));
    });
  }
}

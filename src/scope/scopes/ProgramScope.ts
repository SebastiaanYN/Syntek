import * as grammar from '../../grammar';

import { Scope } from './Scope';
import { GlobalScope } from './GlobalScope';

export class ProgramScope extends Scope<grammar.Program> {
  private static readonly globalScope = new GlobalScope();

  constructor(node: grammar.Program) {
    super(node, ProgramScope.globalScope);
  }

  build(): void {
    this.node.body.forEach(node => this.add(node));
  }
}

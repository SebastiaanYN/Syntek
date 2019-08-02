import { Scope } from './Scope';
import { Span } from '../../../position';

export class FunctionScope extends Scope {
  readonly parent: Scope;

  constructor(parent: Scope, span: Span) {
    super(span);

    this.parent = parent;
  }

  getParent(): Scope {
    return this.parent;
  }
}

import * as grammar from '../../grammar';

import { Scope } from './Scope';
import { SymbolEntry } from '../symbols/SymbolEntry';

export class BlockScope extends Scope {
  build(): void {
    switch (this.node.type) {
      // Expressions
      case grammar.SyntacticToken.IF_EXPR: {
        const expr = this.node as grammar.IfExpression;
        expr.body.forEach(node => this.add(node));
        break;
      }

      case grammar.SyntacticToken.ELSE_EXPR: {
        const expr = this.node as grammar.ElseExpression;
        expr.body.forEach(node => this.add(node));
        break;
      }

      // Statements
      case grammar.SyntacticToken.SWITCH_STMT: {
        const stmt = this.node as grammar.SwitchStatement;
        stmt.cases.forEach(switchCase => this.add(switchCase));
        break;
      }

      case grammar.SyntacticToken.FOR_STMT: {
        const stmt = this.node as grammar.ForStatement;

        this.table.add(stmt.identifier.lexeme, new SymbolEntry(stmt, this));
        stmt.body.forEach(node => this.add(node));

        break;
      }

      case grammar.SyntacticToken.WHILE_STMT: {
        const stmt = this.node as grammar.WhileStatement;
        stmt.body.forEach(node => this.add(node));
        break;
      }

      // Other
      case grammar.SyntacticToken.SWITCH_CASE: {
        const switchCase = this.node as grammar.SwitchCase;
        switchCase.body.forEach(node => this.add(node));
        break;
      }

      default:
        throw new Error(`Block scope can't contain node of type ${grammar.SyntacticToken[this.node.type]}`);
    }
  }
}

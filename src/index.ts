/* eslint-disable import/first, import/newline-after-import */

// import program from '../tests/syntek/programs/fizzbuzz.tek';
import program from './dev.tek';
console.log(program);

// Parsing
import { Tokenizer, Parser } from './parser';
export const tokenResult = new Tokenizer(program).tokenize();
console.log(tokenResult);

export const parseResult = new Parser(tokenResult.tokens).parse();
console.log(parseResult);

// Lint parser
import { Linter, TypeCollector } from './linter';
import * as lintParser from './linter/rules/parser';

console.log(new Linter(
  parseResult.ast,
  lintParser,
).lint());

// Scopes
import { ProgramScope } from './scope';

export const scope = new ProgramScope(parseResult.ast);
scope.build();
console.log(scope);

// Lint declarations
import * as lintDeclarations from './linter/rules/declarations';

console.log(new Linter(
  parseResult.ast,
  lintDeclarations,
  scope,
).lint());

// Collect types
export const typedScope = new ProgramScope(parseResult.ast);
typedScope.build();
new TypeCollector(typedScope).collect();
console.log(typedScope);

// Export everything
export const code = program;
export * from './diagnostic';
export * from './grammar';
export * from './linter';
export * from './parser';
export * from './position';
export * from './scope';
export * from './walker';

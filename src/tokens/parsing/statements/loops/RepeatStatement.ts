import { $ } from '../../../../structures/rule';
import { Token, TokenMatcher } from '../../../../structures/token';

import tokens from '../../../lexing';
import Expression from '../../expressions/Expression';
import Body from '../../Body';

class RepeatStatement extends Token {
  readonly amount;

  readonly body;

  constructor(matchedTokens) {
    super(matchedTokens);

    this.amount = matchedTokens[1];
    this.body = matchedTokens[3].slice(1, matchedTokens[3].length - 1);
  }

  build(): string {
    return '';
  }
}

export default new TokenMatcher(RepeatStatement, $.SEQ(
  tokens.Repeat,
  Expression,
  tokens.Times,
  Body,
));

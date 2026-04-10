# Chess

A browser-based chess game with a built-in AI engine.

**Play now:** https://asxelot.github.io/chess/

## Features

- Minimax AI engine with alpha-beta pruning and piece-square tables
- 5 difficulty levels (Beginner to Expert)
- Play as white or black
- Move highlights, legal move indicators, check detection
- Undo moves, flip board, captured pieces display
- Move history in standard algebraic notation
- Pawn promotion dialog
- Fully self-contained — just open `index.html` in a browser

## Tech

- [chess.js](https://github.com/jhlywa/chess.js) v0.10.3 for rules and move validation
- Custom minimax engine with MVV-LVA move ordering and endgame-aware evaluation
- Zero build tools, zero external runtime dependencies

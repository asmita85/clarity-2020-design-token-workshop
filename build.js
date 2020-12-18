const fs = require('fs');
const tokens = require('./tokens.json');
console.log(tokens);
const transformedTokens = Object.keys(tokens).map(key => {
    return {
        name: `$${key}`,
        value: `${tokens[key].value}rem`
    }
});
console.log(transformedTokens);
const formattedTokens = transformedTokens.map(token => {
    return `${token.name}: ${token.value};`
}).join(`\n`);
console.log(formattedTokens);

fs.writeFileSync('dist/variables.scss', formattedTokens);
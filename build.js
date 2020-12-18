//import the filessystem module
const fs = require('fs');
//import the data structur json 
const tokens = require('./tokens.json');
console.log(tokens);
//transfor the tokens into a shape that looks like a saas variable
const transformedTokens = Object.keys(tokens).map(key => {
    return {
        name: `$${key}`,
        value: `${tokens[key].value}rem`
    }
});
console.log(transformedTokens);
//format the transformed tokens to variable file
const formattedTokens = transformedTokens.map(token => {
    return `${token.name}: ${token.value};`
}).join(`\n`);
console.log(formattedTokens);
// create variable.scss file 
fs.writeFileSync('dist/variables.scss', formattedTokens);
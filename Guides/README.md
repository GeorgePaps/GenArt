# Useful Coding Snippets for P5.js

## Importing color palets from coolors

This code snippet was adapted by Sayamas work https://openprocessing.org/sketch/1255271.

```javascript

    // Initially put the URLs in a variable
    const URL = [
    "https://coolors.co/2e4632-af5b5b-7284a8-e07a5f-fcd0a1",
    "https://coolors.co/f4f1de-e07a5f-3d405b-81b29a-f2cc8f"
    ];

    // Create variables for the colors you want to use 

    let COLS;
    let BGCOL;  

    COLS = shuffle(createCols(random(URL)));
    BGCOL = COLS[0];
    background(BGCOL);
    COLS.shift();

    // A function to create colors from the coolors string

    function createCols(url) {
        let slaIndex = url.lastIndexOf("/");
        let colStr = url.slice(slaIndex + 1);
        let cols = colStr.split("-");
        for (let i = 0; i < cols.length; i++) {
            cols[i] = "#" + cols[i];
        }     
    return cols;

```

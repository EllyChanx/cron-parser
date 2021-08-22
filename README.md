# Cron-Expression-Parser
The cron parser is a command line application that implemented in node and typescript. 
It takes a single space-separated argument (excluding any of the special strings `@yearly`, `@monthly`, `@weekly` etc.). The program then outputs a table  
where each field of the expression is expanded.

For example the expression `*/15 0 1,15 * 1-5 /usr/bin/find` will produce the following output:
```
minutes        0 15 30 45
hours          0
day of month   1 15
month          1 2 3 4 5 6 7 8 9 10 11 12
day of week    1 2 3 4 5
command        /usr/bin/find
```

## Install & Run
Please ensure your `Node` is v13.2.0+
* `npm install`
* `npm run compile`
* `node index.js '*/15 0 1,5 * 1-5 /usr/bind/find'` or `npm start '*/15 0 1,5 * 1-5 /usr/bind/find'`

### Development
* `npm run watch` to watch the files and re-compile when change happens

### Run Test
* `npm t` to run the jest tests

## Allowed values
| Field          | Allowed Values                                           | Allowed special characters | Mandatory? |
| -----------    | -----------                                              | -----------                | ---------- |
| minute         | `0-59`                                                   | `*` `,` `-` `/`            | Yes        |
| hour           | `0-23`                                                   | `*` `,` `-` `/`            | Yes        |
| day of month   | `1-31`                                                   | `*` `,` `-` `/`            | Yes        |
| month          | `1-12`                                                   | `*` `,` `-` `/`            | Yes        |
| day of week    | `0-7` (`0` & `7` is Sun)                                 | `*` `,` `-` `/`            | Yes        |

The order of the fields must be preserved.

## To do
* Handle range intervals (e.g. `15-35/15` should return `15 30` for minute)
* Handle abbreviation for months (`jan`-`dec`) and day of week (`sun`-`sat`)
* Handle year params
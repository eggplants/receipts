# receipts

- code examples for [receiptline](https://github.com/receiptline/receiptline)

## list

- [macdonald](mac/out.svg)
- [qrcode](qrcode/out.svg)

## export

```bash
$ npm install receiptline
$ chmod +x rltosvg
$ ./rltosvg <cpl int> <encoding> <import filepath> <export filepath>
```

```txt
<cpl>:
  characters per line

<encoding>:
  cp437: United States
  cp852: Central European
  cp858: Western European
  cp860: Portuguese
  cp863: French Canadian
  cp865: Nordic
  cp866: Cyrillic
  cp932: Japanese
  cp1252: Western European

<import filepath>:
  receipt line code filepath

<export filepath>:
  export svg filepath
```

## example

```bash
# japanese
$ ./rltosvg.js 48 cp932 code.rl out.svg
```

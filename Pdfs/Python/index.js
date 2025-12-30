let out = ""
for (i = 0; i < 10; i++) {
    console.log(out + i % 2)
    out = out + i % 2
}
console.log(out);
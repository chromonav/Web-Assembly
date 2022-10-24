fetch("./test.wasm").then(r=>r.arrayBuffer()).then(buffer=>{
    return WebAssembly.instantiate(buffer)
}).then(({instance,module})=>{
    console.log(instance.exports._Z4facti(5))
    console.log(module)
})

// WebAssembly.instantiateStreaming(fetch("./test.wasm")).then(r=>{
//     console.log(r)
// })
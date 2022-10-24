fetch("./em_factorial.wasm").then(r=>r.arrayBuffer()).then(buffer=>{
    return WebAssembly.instantiate(buffer)
}).then(({instance,module})=>{
    console.log(instance)
    console.log(module)
})

// WebAssembly.instantiateStreaming(fetch("./test.wasm")).then(r=>{
//     console.log(r)
// })
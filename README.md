# cf-worker-rust-ts-template

cloudflare worker template with rust wasm and typescript

## getting started

### clone

```bash
wrangler generate wasm-worker  https://github.com/coolrc136/cf-worker-rust-ts-template.git
cd wasm-worker
```

### install wasm-pack

```bash
cargo install wasm-pack
```

### build & test

```bash
npm run build
npm run test
```

### directories

- `ts`: typescript source code
- `src`: rust source code
- `test`：rust Tests,see:[Testing with wasm-bindgen-test](https://rustwasm.github.io/wasm-bindgen/wasm-bindgen-test/index.html)

### thanks

- [worker-typescript-template](https://github.com/cloudflare/worker-typescript-template)
- [rustwasm-worker-template](https://github.com/cloudflare/rustwasm-worker-template)

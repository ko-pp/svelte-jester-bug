# Simple reproduction of a bug when using svelte-jester with Sapper and transformers

## Traceback

```
Failed to collect coverage from <snip>/svelte-jester-bug/src/components/Nav.svelte
ERROR: The "id" argument must be of type string. Received an instance of URL
STACK: TypeError [ERR_INVALID_ARG_TYPE]: The "id" argument must be of type string. Received an instance of URL
    at validateString (internal/validators.js:124:11)
    at Module.require (internal/modules/cjs/loader.js:954:3)
    at require (internal/modules/cjs/helpers.js:92:18)
    at <snip>/svelte-jester-bug/node_modules/svelte-jester/dist/transformer.cjs:79:118
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
```

## How to reproduce

- Degit Sapper `npx degit "sveltejs/sapper-template#rollup" my-app`
- Setup Jest with svelte-jester and a simple test (see `src/fake.test.js`); at this point, `npx jest` should work
- Add svelte-preprocess, postcss and autoprefixer (see `svelte.config.js`), change svelte-jester config to use preprocess (see `jest.config.js`); `npx jest` will show errors and fail to add svelte files to the coverage

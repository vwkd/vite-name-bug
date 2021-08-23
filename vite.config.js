import { resolve } from 'path'

const config = {
    build: {
        lib: {
            entry: resolve(__dirname, 'main.js'),
            // vvv This should be applied vvv
            fileName: 'MY-NAME',
        },
    },
}

export default config
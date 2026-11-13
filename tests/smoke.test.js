import assert from "node:assert/strict"
import test from "node:test"
import {app} from "../src/app.js"

test("serves the study helper frontend", async () => {
    const server = app.listen(0)

    try {
        const {port} = server.address()
        const response = await fetch(`http://127.0.0.1:${port}/`)
        const body = await response.text()

        assert.equal(response.status, 200)
        assert.match(body, /Study|study/i)
    } finally {
        await new Promise((resolve) => server.close(resolve))
    }
})

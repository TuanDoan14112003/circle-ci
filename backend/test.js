const assert = require("assert");
const { hello } = require("./controller");


describe("Test",function(){
    it("asdfadsf",() => {
        assert(hello(), "<h1>Hello world</h1>");
    })
})

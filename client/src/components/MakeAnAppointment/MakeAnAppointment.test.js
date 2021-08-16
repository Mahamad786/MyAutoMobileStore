const MakeAnAppointment = require("./MakeAnAppointment")

// @ponicode
describe("handleChange", () => {
    let inst

    beforeEach(() => {
        inst = new MakeAnAppointment.default("reply_click()")
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleChange("reply_click()", { target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleChange("reply_click()", { target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleChange("reply_click()", { target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleChange(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

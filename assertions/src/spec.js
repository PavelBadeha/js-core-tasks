describe("Assertions",function()
{
    //comparison of two numbers
    let a = 2;
    let b = 2;

    it("comparison of two numbers (=)",function()
    {
        expect(a).toEqual(b)
    })

    it("comparison of two numbers (>)",function()
    {   
        expect(a).toBeGreaterThan(b - 1)
    })

    it("comparison of two numbers (<)",function()
    {   
        expect(a).toBeLessThan(b + 1)
    })

    it("comparison of two numbers (>=)",function()
    {   
        expect(a).toBeGreaterThanOrEqual(b)
    })

    it("comparison of two numbers (<=)",function()
    {   
        expect(a).toBeLessThanOrEqual(b)
    })
    
    //comparison of two lines for a complete match
    let str1 = "little fox"
    let str2 = "little fox"

    it("comparison of two lines (toBe)",function()
    {
        expect(str1).toBe(str2)
    })

    it("comparison of two lines (toContain)",function()
    {
        expect(str1).toContain('little')
    })
    
    //comparison of arrays
    let arr1 = [1,2,3,4]
    let arr2 = [1,2,3,4]

    it("comparison of arrays",function()
    {
        expect(arr1).toEqual(arr2)
    })
    
    //compare array of strings
    let arrOfStr1 = ["1","2","3"]
    let arrOfStr2 = ["1","2","3"]

    it("compare array of strings",function()
    {
        expect(arrOfStr1).toEqual(arrOfStr2)
    })
})
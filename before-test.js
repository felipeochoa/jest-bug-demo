describe("abc", function() {
  it("runs abc", function() {});
});

describe("def", function() {
  beforeAll(() => console.log("Ran beforeAll for def"));
  it("does not run def", function() {
    fail("ran def");
  })
});

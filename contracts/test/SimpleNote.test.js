const SimpleNote = artifacts.require("SimpleNote");

contract("SimpleNote", (accounts) => {
  let simpleNote;

  before(async () => {
    simpleNote = await SimpleNote.new();
  });

  it("should set the owner correctly", async () => {
    const owner = await simpleNote.owner();
    assert.equal(owner, accounts[0], "Owner should be the deploying account");
  });

  it("should allow owner to update note", async () => {
    await simpleNote.updateNote("My first note");
    const note = await simpleNote.getNote();
    assert.equal(note, "My first note", "Note should be updated");
  });

  it("should not allow non-owner to update note", async () => {
    try {
      await simpleNote.updateNote.call("New note", { from: accounts[1] });
      assert.fail("Non-owner was able to update the note");
    } catch (error) {
      assert.include(
        error.message,
        "Only the owner can update the note",
        "Error message should contain 'Only the owner can update the note'"
      );
    }
  });
});

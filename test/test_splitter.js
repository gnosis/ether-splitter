const EtherSplitter = artifacts.require("EtherSplitter");

contract('EtherSplitter', (accounts) => {
    it('splits ether', async () => {
        const etherSplitter = await EtherSplitter.deployed()
        const recipients = accounts.slice(1)
        const amountForEach = 1e18
        const totalAmount = recipients.length * amountForEach
        const allHoldingsBefore = recipients.map((r) => web3.eth.getBalance(r))
        await etherSplitter.splitEther(recipients, { value: totalAmount })
        recipients.forEach((r, i) => {
            const holdingsBefore = allHoldingsBefore[i]
            assert.equal(allHoldingsBefore[i].add(amountForEach).valueOf(), web3.eth.getBalance(r).valueOf())
        })
    })
})
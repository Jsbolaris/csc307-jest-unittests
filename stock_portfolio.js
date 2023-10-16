class Portfolio
{
    constructor(){
        this.myShares = [];
    }
    //check empty shares
    isEmpty(){
        return this.myShares.length === 0;
    }

     // Add or update a share object in the list
      addShare(obj) {
        // Check if obj is a valid share (has 'Symbol' and 'shares' properties)
        if (obj.symbol && obj.shares) {
          const existingShareIndex = this.myShares.findIndex(share => share.symbol === obj.symbol);

          if (existingShareIndex !== -1) {
            // Update shares of the existing share

            this.myShares[existingShareIndex].shares += obj.shares;
          } else {
            // Add a new share to the list
            this.myShares.push(obj);
          }
        } else {
          console.log("Invalid share object. It must have 'Symbol' and 'shares' properties.");
        }
      }
      countUniqueShares() {
          const uniqueShareNames = new Set();
          for (const obj of this.myShares) {
            if (obj.symbol) {
              uniqueShareNames.add(obj.symbol);
            }
          }
          return uniqueShareNames.size;
        }
        subtractShares(symbol, sharesToSubtract) {
          // Find the share with the given symbol
          const shareIndex = this.myShares.findIndex(share => share.symbol === symbol);
          if (shareIndex !== -1) {
                  // Check if trying to subtract more shares than available
                  if (this.myShares[shareIndex].shares < sharesToSubtract) {
                      throw new Error(`Attempted to subtract ${sharesToSubtract} shares, but only ${this.myShares[shareIndex].shares} shares are available.`);
           }

          if (shareIndex !== -1) {
            // Subtract shares if the share exists
            this.myShares[shareIndex].shares -= sharesToSubtract;

            // Remove the share if the shares become zero or negative
            if (this.myShares[shareIndex].shares <= 0) {
              this.myShares.splice(shareIndex, 1);
            }
          } else {
            console.log(`Share with symbol '${symbol}' not found.`);
          }
        }
        }
        getSharesBySymbol(symbol) {
            const share = this.myShares.find(share => share.symbol === symbol);
            return share ? share.shares : 0;
        }
 }



export default { Portfolio };

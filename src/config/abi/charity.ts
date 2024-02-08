export default [{ "inputs": [{ "internalType": "address", "name": "_usdt", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "OwnableInvalidOwner", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "OwnableUnauthorizedAccount", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [], "name": "MAX_AUDITOR_NUM", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "bool", "name": "isAgree", "type": "bool" }, { "internalType": "string", "name": "reason", "type": "string" }], "name": "auditDonate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "targetAmount", "type": "uint256" }, { "internalType": "string", "name": "json", "type": "string" }], "name": "createDonate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "currentId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "donateHandler", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "array", "type": "address[]" }, { "internalType": "address", "name": "id", "type": "address" }], "name": "findIndex", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "getAuditorAddress", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "getAuditorDonates", "outputs": [{ "components": [{ "components": [{ "internalType": "address", "name": "personAddress", "type": "address" }, { "internalType": "string", "name": "idCard", "type": "string" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "uint256", "name": "integral", "type": "uint256" }, { "internalType": "uint16", "name": "brithYear", "type": "uint16" }, { "internalType": "uint8", "name": "sex", "type": "uint8" }, { "internalType": "uint256", "name": "cumulativeAmount", "type": "uint256" }, { "internalType": "uint256[]", "name": "myDonateIds", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "donatedIds", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "voteIds", "type": "uint256[]" }, { "internalType": "bool", "name": "isVoting", "type": "bool" }], "internalType": "struct CharitableDonations.Person", "name": "person", "type": "tuple" }, { "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "personAddress", "type": "address" }, { "internalType": "uint256", "name": "targetAmount", "type": "uint256" }, { "internalType": "uint256", "name": "currentAmount", "type": "uint256" }, { "internalType": "string", "name": "json", "type": "string" }, { "internalType": "bool", "name": "isPassed", "type": "bool" }, { "internalType": "bool", "name": "isFinish", "type": "bool" }, { "internalType": "address[]", "name": "donatorsAddress", "type": "address[]" }, { "internalType": "address[]", "name": "auditorsAddress", "type": "address[]" }, { "internalType": "bool[]", "name": "auditProgress", "type": "bool[]" }, { "internalType": "string[]", "name": "auditorReason", "type": "string[]" }], "internalType": "struct CharitableDonations.Donate", "name": "donate", "type": "tuple" }], "internalType": "struct CharitableDonations.DonateDetail[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "getDonateDetail", "outputs": [{ "components": [{ "components": [{ "internalType": "address", "name": "personAddress", "type": "address" }, { "internalType": "string", "name": "idCard", "type": "string" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "uint256", "name": "integral", "type": "uint256" }, { "internalType": "uint16", "name": "brithYear", "type": "uint16" }, { "internalType": "uint8", "name": "sex", "type": "uint8" }, { "internalType": "uint256", "name": "cumulativeAmount", "type": "uint256" }, { "internalType": "uint256[]", "name": "myDonateIds", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "donatedIds", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "voteIds", "type": "uint256[]" }, { "internalType": "bool", "name": "isVoting", "type": "bool" }], "internalType": "struct CharitableDonations.Person", "name": "person", "type": "tuple" }, { "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "personAddress", "type": "address" }, { "internalType": "uint256", "name": "targetAmount", "type": "uint256" }, { "internalType": "uint256", "name": "currentAmount", "type": "uint256" }, { "internalType": "string", "name": "json", "type": "string" }, { "internalType": "bool", "name": "isPassed", "type": "bool" }, { "internalType": "bool", "name": "isFinish", "type": "bool" }, { "internalType": "address[]", "name": "donatorsAddress", "type": "address[]" }, { "internalType": "address[]", "name": "auditorsAddress", "type": "address[]" }, { "internalType": "bool[]", "name": "auditProgress", "type": "bool[]" }, { "internalType": "string[]", "name": "auditorReason", "type": "string[]" }], "internalType": "struct CharitableDonations.Donate", "name": "donate", "type": "tuple" }], "internalType": "struct CharitableDonations.DonateDetail", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "startIndex", "type": "uint256" }, { "internalType": "uint256", "name": "endIndex", "type": "uint256" }], "name": "getDonates", "outputs": [{ "components": [{ "components": [{ "internalType": "address", "name": "personAddress", "type": "address" }, { "internalType": "string", "name": "idCard", "type": "string" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "uint256", "name": "integral", "type": "uint256" }, { "internalType": "uint16", "name": "brithYear", "type": "uint16" }, { "internalType": "uint8", "name": "sex", "type": "uint8" }, { "internalType": "uint256", "name": "cumulativeAmount", "type": "uint256" }, { "internalType": "uint256[]", "name": "myDonateIds", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "donatedIds", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "voteIds", "type": "uint256[]" }, { "internalType": "bool", "name": "isVoting", "type": "bool" }], "internalType": "struct CharitableDonations.Person", "name": "person", "type": "tuple" }, { "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "personAddress", "type": "address" }, { "internalType": "uint256", "name": "targetAmount", "type": "uint256" }, { "internalType": "uint256", "name": "currentAmount", "type": "uint256" }, { "internalType": "string", "name": "json", "type": "string" }, { "internalType": "bool", "name": "isPassed", "type": "bool" }, { "internalType": "bool", "name": "isFinish", "type": "bool" }, { "internalType": "address[]", "name": "donatorsAddress", "type": "address[]" }, { "internalType": "address[]", "name": "auditorsAddress", "type": "address[]" }, { "internalType": "bool[]", "name": "auditProgress", "type": "bool[]" }, { "internalType": "string[]", "name": "auditorReason", "type": "string[]" }], "internalType": "struct CharitableDonations.Donate", "name": "donate", "type": "tuple" }], "internalType": "struct CharitableDonations.DonateDetail[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "getPersonDetail", "outputs": [{ "components": [{ "internalType": "address", "name": "personAddress", "type": "address" }, { "internalType": "string", "name": "idCard", "type": "string" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "uint256", "name": "integral", "type": "uint256" }, { "internalType": "uint16", "name": "brithYear", "type": "uint16" }, { "internalType": "uint8", "name": "sex", "type": "uint8" }, { "internalType": "uint256", "name": "cumulativeAmount", "type": "uint256" }, { "internalType": "uint256[]", "name": "myDonateIds", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "donatedIds", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "voteIds", "type": "uint256[]" }, { "internalType": "bool", "name": "isVoting", "type": "bool" }], "internalType": "struct CharitableDonations.Person", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getPersons", "outputs": [{ "components": [{ "internalType": "address", "name": "personAddress", "type": "address" }, { "internalType": "string", "name": "idCard", "type": "string" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "uint256", "name": "integral", "type": "uint256" }, { "internalType": "uint16", "name": "brithYear", "type": "uint16" }, { "internalType": "uint8", "name": "sex", "type": "uint8" }, { "internalType": "uint256", "name": "cumulativeAmount", "type": "uint256" }, { "internalType": "uint256[]", "name": "myDonateIds", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "donatedIds", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "voteIds", "type": "uint256[]" }, { "internalType": "bool", "name": "isVoting", "type": "bool" }], "internalType": "struct CharitableDonations.Person[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "getVoteDetail", "outputs": [{ "components": [{ "components": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "string", "name": "reason", "type": "string" }, { "internalType": "address", "name": "promoter", "type": "address" }, { "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "address", "name": "target", "type": "address" }, { "internalType": "uint256", "name": "agreeNum", "type": "uint256" }, { "internalType": "uint256", "name": "disagreeNum", "type": "uint256" }, { "internalType": "bool", "name": "isFinish", "type": "bool" }, { "internalType": "address[]", "name": "voters", "type": "address[]" }], "internalType": "struct CharitableDonations.Vote", "name": "vote", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "personAddress", "type": "address" }, { "internalType": "string", "name": "idCard", "type": "string" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "uint256", "name": "integral", "type": "uint256" }, { "internalType": "uint16", "name": "brithYear", "type": "uint16" }, { "internalType": "uint8", "name": "sex", "type": "uint8" }, { "internalType": "uint256", "name": "cumulativeAmount", "type": "uint256" }, { "internalType": "uint256[]", "name": "myDonateIds", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "donatedIds", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "voteIds", "type": "uint256[]" }, { "internalType": "bool", "name": "isVoting", "type": "bool" }], "internalType": "struct CharitableDonations.Person", "name": "targetPerson", "type": "tuple" }, { "components": [{ "internalType": "address", "name": "personAddress", "type": "address" }, { "internalType": "string", "name": "idCard", "type": "string" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "uint256", "name": "integral", "type": "uint256" }, { "internalType": "uint16", "name": "brithYear", "type": "uint16" }, { "internalType": "uint8", "name": "sex", "type": "uint8" }, { "internalType": "uint256", "name": "cumulativeAmount", "type": "uint256" }, { "internalType": "uint256[]", "name": "myDonateIds", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "donatedIds", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "voteIds", "type": "uint256[]" }, { "internalType": "bool", "name": "isVoting", "type": "bool" }], "internalType": "struct CharitableDonations.Person", "name": "promoter", "type": "tuple" }], "internalType": "struct CharitableDonations.VoteDetail", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "_address", "type": "address" }], "name": "getVotersDetail", "outputs": [{ "components": [{ "internalType": "uint256", "name": "aggreeNum", "type": "uint256" }, { "internalType": "uint256", "name": "disagreeNum", "type": "uint256" }], "internalType": "struct CharitableDonations.VoterNumDetail", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "idCard", "type": "string" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "uint16", "name": "brithYear", "type": "uint16" }, { "internalType": "uint8", "name": "sex", "type": "uint8" }], "name": "register", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "setVoteTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_auditorAddress", "type": "address" }, { "internalType": "string", "name": "_reason", "type": "string" }], "name": "startVoteAuditor", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "usdt", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "userDonateItemAmount", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }, { "internalType": "bool", "name": "isAgree", "type": "bool" }, { "internalType": "uint256", "name": "voteNum", "type": "uint256" }], "name": "vote", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "voteCurrentId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }], "name": "voteFinish", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "voteTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "voterNumDetail", "outputs": [{ "internalType": "uint256", "name": "aggreeNum", "type": "uint256" }, { "internalType": "uint256", "name": "disagreeNum", "type": "uint256" }], "stateMutability": "view", "type": "function" }] as const

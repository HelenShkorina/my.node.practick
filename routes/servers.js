const {Routes} = require('express')
const router = Routes()
const getAll = require("../controllers/servers.js")
router.get('/api/server', getAll)



module.exports = router
module.exports = getAll

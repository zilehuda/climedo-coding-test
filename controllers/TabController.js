
const Tab = require('../models/Tab')


const tab_index = async(req, res) => {
    try{
    const tabs = await Tab.find();
    console.log(tabs)
    res.json(tabs);
    }
    catch(err) {
        res.json({
            message: err
        })
    }
}


const tab_create = async(req, res) => {

    const tab = new Tab({
        name: req.body.name,
        description: req.body.description,
        dataPoints: req.body.dataPoints,
    })
    try{
        const savedTab = await tab.save()
        res.json(savedTab)
    }catch(err){
        res.json({"message": err})
    }
}

const tab_delete = async(req, res) => {
    try{
        const removedTab = await Tab.remove({_id: req.params.tabId});
        res.json(removedTab );

    }
    catch(err) {
        res.json({message: err})
    }
}

const tab_update = async(req, res) => {
    let newTab = req.body
    console.log(newTab)
    try {
        const updatedTab = await Tab.updateOne(
            {_id: req.params.tabId},
            newTab
        );
        res.json(updatedTab)
    }
    catch(err) {
        res.json({message: err}) 
    }
}

const tab_stats = async(req, res) => {
    
    try{
    let tabStats = []
    await Tab.find({}, (err, tabs) => {
        console.log('dddd')
        tabs.map(tab => {
            const _tabStat = {
                _id: tab._id,
                datapointCount: tab.dataPoints.length,
            }
            tabStats.push(_tabStat)
        })
    })
    res.json(tabStats)
    }
    catch(err){
        res.json({message: err}) 
    }
}

module.exports = {
    tab_index,
    tab_create,
    tab_delete,
    tab_update,
    tab_stats,
}
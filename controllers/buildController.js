

exports.buildList = function(req,res,next){
    var buildList = [
        {
            hostName: "test1",
            domainName: "blah.com",
            cpus: "4",
            memory: "8",
            hdSize: "100",
            comments: "COR-15823"
        },{
            hostName: "test2",
            domainName: "blah.com",
            cpus: "2",
            memory: "12",
            hdSize: "300",
            comments: "COR-15823"
        }
    ]
    res.render('index', { buildList: buildList});
}

exports.buildListApi = function(req,res,next){
    var buildList = [
        {
            hostName: "test1",
            domainName: "blah.com",
            cpus: "4",
            memory: "8",
            hdSize: "100",
            comments: "COR-15823"
        },{
            hostName: "test2",
            domainName: "blah.com",
            cpus: "2",
            memory: "12",
            hdSize: "300",
            comments: "COR-15823"
        }
    ]
    res.json(buildList);
}
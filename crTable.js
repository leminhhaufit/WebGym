var AWS = require("aws-sdk");
const tableBaitap = "Baitap";
const tablenTaikhoan= "Taikhoan";
const tablelichtap= "Lichtap";

AWS.config.update({
    region: 'us-east-2',
    //endpoint : 'http://localhost:8000'
    accessKeyId:'AKIA4X52LXILVULPVPVZ',
    secretAccessKey:'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'
  })
var dynamodb = new AWS.DynamoDB();

var paramsBao = {
    TableName : tableBaitap,
    KeySchema: [       
        { AttributeName: "id", KeyType: "HASH"},  //Partition key
       
    ],
    AttributeDefinitions: [       
        { AttributeName: "id", AttributeType: "S" },
        
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 1, 
        WriteCapacityUnits: 1
    }
};
var paramsNXB = {
    TableName : tablenTaikhoan,
    KeySchema: [       
        { AttributeName: "id", KeyType: "HASH"},  //Partition key
       
    ],
    AttributeDefinitions: [       
        { AttributeName: "id", AttributeType: "S" },
        
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 1, 
        WriteCapacityUnits: 1
    }
};
var paramslichtap = {
    TableName : tablelichtap,
    KeySchema: [       
        { AttributeName: "id", KeyType: "HASH"},  //Partition key
       
    ],
    AttributeDefinitions: [       
        { AttributeName: "id", AttributeType: "S" },
        
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 1, 
        WriteCapacityUnits: 1
    }
};
dynamodb.createTable(paramslichtap, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});
dynamodb.createTable(paramsBao, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});
dynamodb.createTable(paramsNXB, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});
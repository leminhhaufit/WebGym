var express = require('express');
const tableBaitap = "Baitap";
const tablenTaikhoan= "Taikhoan";
const tablelichtap= "Lichtap";
const AWS = require('aws-sdk');
const fs = require('fs');
const { Converter } = require('aws-sdk/clients/dynamodb');
AWS.config.update({
    region: 'us-east-2',
    //endpoint : 'http://localhost:8000'
    accessKeyId:'AKIA4X52LXILVULPVPVZ',
    secretAccessKey:'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'
  })

var dynamo = new AWS.DynamoDB();
var docClient =  new AWS.DynamoDB.DocumentClient();

exports.getall = (req,res)=>{
    let params ={
        TableName:tableBaitap
    };
    let paramsnxb ={
        TableName:tablelichtap
    };
    docClient.scan(params,(err,data)=>{
        if(err){
            console.log(err);
        }else{
           
            
            console.log("du lieu getall "+ data.Items[0]);
                    res.render('index',{
                    title:"Danh sach bai bao",
                    result: data.Items,
                });
        }
    });
}
exports.getallNXB = (req,res)=>{
    let params ={
        TableName:tablenxb
    };
    
    docClient.scan(params,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log("du lieu getall zczxczc "+ data.Items);
            res.render('fthem',{
                title:"Danh sach bai bao",
                result: data.Items
            });
        }
    });
}
exports.getallBaitap = (req,res)=>{
    let params ={
        TableName:tableBaitap
    };
    
    docClient.scan(params,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log("du lieu getall  ", data.Items[0]);
            res.render('dsbaitap',{
                title:"Gym for life Danh sach bai tap",
                result: data.Items
            });
        }
    });
}
exports.getbaitapbyThu = (req,res)=>{
    var thu = ["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"];
              current_date = new Date();
              cday = current_date.getUTCDay();
    var params = {
        TableName: tablelichtap,
        FilterExpression: "#thu = :thu",
        ExpressionAttributeNames: {
            "#thu": "thu",
        },

        ExpressionAttributeValues: {
             ":thu": thu[cday],
        }
    };

            docClient.scan(params,function(err, data1) {
                if (err) {
                    // for the log in server
                    console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
                    res.json(err);
                } else {

                    console.log("Scan succeeded.");
                    res.render('luyentap',{
                        title: "Gym for life - Luyện tập",
                        result:data1.Items,
                        count: data1.Count
                    });
                }
            })


}
exports.getallLichtap = (req,res)=>{
    const tentk = req.params;
    console.log("tentk ",tentk);
    var params = {
        TableName: tablelichtap,
        FilterExpression: "#thu = :thu",
        ExpressionAttributeNames: {
            "#thu": "thu",
        },

        ExpressionAttributeValues: {
             ":thu": 'Thứ hai',
        }
    };

docClient.scan(params,function(err, data1) {
    if (err) {
        // for the log in server
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        res.json(err);
    } else {

        console.log("Scan succeeded.");
        //res.json(data);
        var params = {
            TableName: tablelichtap,
            FilterExpression: "#thu = :thu",
            ExpressionAttributeNames: {
                "#thu": "thu",
            },
    
            ExpressionAttributeValues: {
                 ":thu": 'Thứ ba',
            }
        };
    
        docClient.scan(params,function(err, data2) {
            if (err) {
                // for the log in server
                console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
                res.json(err);
            } else {
        
                console.log("Scan succeeded.");
                //res.json(data);
                 console.log("Scan succeeded.");
                //res.json(data);
                var params = {
                    TableName: tablelichtap,
                    FilterExpression: "#thu = :thu",
                    ExpressionAttributeNames: {
                        "#thu": "thu",
                    },
            
                    ExpressionAttributeValues: {
                        ":thu": 'Thứ tư',
                    }
                };
            
            docClient.scan(params,function(err, data3) {
                if (err) {
                    // for the log in server
                    console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
                    res.json(err);
                } else {
            
                    console.log("Scan succeeded.");
                    //res.json(data);
                    console.log("Scan succeeded.");
                //res.json(data);
                var params = {
                    TableName: tablelichtap,
                    FilterExpression: "#thu = :thu",
                    ExpressionAttributeNames: {
                        "#thu": "thu",
                    },
            
                    ExpressionAttributeValues: {
                        ":thu": 'Thứ năm',
                    }
                };
            
            docClient.scan(params,function(err, data4) {
                if (err) {
                    // for the log in server
                    console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
                    res.json(err);
                } else {
            
                    console.log("Scan succeeded.");
                    //res.json(data);
                    console.log("Scan succeeded.");
                //res.json(data);
                var params = {
                    TableName: tablelichtap,
                    FilterExpression: "#thu = :thu",
                    ExpressionAttributeNames: {
                        "#thu": "thu",
                    },
            
                    ExpressionAttributeValues: {
                        ":thu": 'Thứ sáu',
                    }
                };
            
            docClient.scan(params,function(err, data5) {
                if (err) {
                    // for the log in server
                    console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
                    res.json(err);
                } else {
            
                    console.log("Scan succeeded.");
                    //res.json(data);
                    console.log("Scan succeeded.");
                //res.json(data);
                var params = {
                    TableName: tablelichtap,
                    FilterExpression: "#thu = :thu",
                    ExpressionAttributeNames: {
                        "#thu": "thu",
                    },
            
                    ExpressionAttributeValues: {
                        ":thu": 'Thứ bảy',
                    }
                };
            
            docClient.scan(params,function(err, data6) {
                if (err) {
                    // for the log in server
                    console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
                    res.json(err);
                } else {
            
                    console.log("Scan succeeded.");
                    //res.json(data);
                    console.log("Scan succeeded.");
                //res.json(data);
                var params = {
                    TableName: tablelichtap,
                    FilterExpression: "#thu = :thu",
                    ExpressionAttributeNames: {
                        "#thu": "thu",
                    },
            
                    ExpressionAttributeValues: {
                        ":thu": 'Chủ nhật',
                    }
                };
            
            docClient.scan(params,function(err, data7) {
                if (err) {
                    // for the log in server
                    console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
                    res.json(err);
                } else {
            
                    console.log("Scan succeeded.");
                    //res.json(data);
                    res.render('lichtap',{
                        title: "Gym for life - Lịch tập",
                        result2:data1.Items,
                        result3:data2.Items,
                        result4:data3.Items,
                        result5:data4.Items,
                        result6:data5.Items,
                        result7:data6.Items,
                        result8:data7.Items,
                    });
                    
            
                }
                } );
                    
            
                }
                } );
                    
            
                }
                } );
                    
            
                }
                } );
                    
            
                }
                } );
            
    
        }
        } );
       

    }
} );


    
}
exports.thembao = (req,res)=>{
    const{id,tenbaitap,thoigiantap,solan,link}=req.body;
    let params={
        TableName:tableBaitap,
        Item:{
            id:String(id),
            tenbaitap:String(tenbaitap),
            thoigiantap:Number(thoigiantap),
            solan:Number(solan),
            link:String(link),
            
        }
    };
    console.log(params);
    docClient.put(params,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
            
        }
    });
}
exports.themlich2 = (req,res)=>{
    const{id,tenbaitap,thoigiantap,solan,link,thu,taikhoan}=req.body;
    let params={
        TableName:tablelichtap,
        Item:{
            id:String(id),
            tenbaitap:String(tenbaitap),
            thoigiantap:Number(thoigiantap),
            solan:Number(solan),
            link:String(link),
            thu:String(thu),
            taikhoan:String(taikhoan)
            
        }
    };
    console.log(params);
    docClient.put(params,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    });
}
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
exports.timbaitap=(req,res)=>{
    
    var params = {
        TableName:tableBaitap,
        KeyConditionExpression: "#tenbaitap = :tenbaitap",
        ExpressionAttributeNames:{
            "#tenbaitap": "tenbaitap"
        },
        ExpressionAttributeValues: {
            ":tenbaitap": req.query.id
        }
    };
    
    docClient.query(params, function(err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        } else {
            console.log("Query succeeded.");
            data.Items.forEach(function(item) {
                console.log(" -", item.id + ": " + item.tenbaitap);
                
            });
        }
    });

}
exports.login = (req,res)=>{
    const {username,password}= req.body;

    var paramsdn = {
        TableName : tablenTaikhoan,
        KeyConditionExpression:"#tentaikhoan = :tentk",
        ExpressionAttributeNames:{
            "#tentaikhoan" : "tentk"
        },
        ExpressionAttributeValues:{
            ":tentk": username
        }
    };
    docClient.query(paramsdn, function(err,data){
        if(err){
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        } else {
            console.log("Query Login succeeded.");
            data.Items.forEach(function(item) {
                console.log(" -", item.id + ": " + item.tentaikhoan);
                if(item.password === password){
                    console.log("Login Thanh cong!!!!!");
                    res.render('index',{title: "Gym for life Trang chủ",
                    tentaikhoan: item.tentaikhoan
                
                    });
                }
            });
        }
    })
}
exports.themlich=(req,res)=>{
    
    const {thu,id,tentk}=req.query;
    var params = {
        TableName:tableBaitap,
        KeyConditionExpression: "#id = :id",
        ExpressionAttributeNames:{
            "#id": "id"
        },
        ExpressionAttributeValues: {
            ":id": id
        }
    };
    
    docClient.query(params, function(err, data1) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        } else {
            let params3 ={
                TableName:tablelichtap
            };
            
            docClient.scan(params3,(err,data2)=>{
                if(err){
                    console.log(err);
                }else{
                    
                    console.log("so dong du lieu  ", data2.Count+1);
                    
                    console.log("Query succeeded. ",data1.Count);
                    data1.Items.forEach(function(item) {
                        console.log(" -", item.id + ": " + item.tenbaitap);
                        
                    
                    let params={
                        TableName:tablelichtap,
                        Item:{
                            id: String(data2.Count+1),
                            tenbaitap: item.tenbaitap,
                            thoigiantap: item.thoigiantap,
                            solan: item.solan,
                            link: item.link,
                            thu:String(thu),
                            taikhoan:String(tentk)
                            
                        }
                    };
                    console.log(params);
                    docClient.put(params,(err,data)=>{
                        if(err){
                            console.log(err);
                        }else{
                            res.redirect('/dsbt');
                        }
                    });
                });
                }
            });
            
        }
    });

}
exports.sualayid3=(req,res)=>{
    const id = req.query.id;
    console.log("timten: ",id);
    var params = {
        ExpressionAttributeValues: {
         
          ':ten' : {S: id},
          
        },
        ProjectionExpression: 'id, tenbaitap, thoigiantap,solan,link',
        FilterExpression: 'contains (tenbaitap, :ten)',
        TableName:tableBaitap,
      };
      
      ddb.scan(params, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          
          console.log("Success", data.Items);
          data.Items.forEach(function(element, index, array) {
            console.log(element.id.S + " (" + element.tenbaitap.S + ")");
            res.render('dsbaitap',{
                title:"Gym for life Danh sach bai tap",
                id:element.id.S,
                tenbaitap:element.tenbaitap.S,
                thoigiantap:element.thoigiantap.N,
                solan:element.solan.N,
                link:element.link.S,
            });
          });
          
        }
      });
    

}
exports.suabao =(req,res)=>{
    const{id,tenbaibao,tentacgia,isbn,sotrang,nam,id_NXB}=req.body;
    let params={
        TableName:tablenews,
        Key:{
            "id":id,
        },
        UpdateExpression:"set #bao:tenbaibao,#tg:tentacgia,#is:isbn,#st:sotrang,#n:nam,#nxb:id_NXB",
        ExpressionAttributeNames:{
            '#bao':'tenbaibao',
            '#tg':'tentacgia',
            '#is':'isbn',
            '#st':'sotrang',
            '#n':'nam',
            '#nxb':'id_NXB'
        },
        ExpressionAttributeValues:{
            ':tenbaibao':String(tenbaibao),
            ':tentacgia':String(tentacgia),
            ':isbn':String(isbn),
            ':sotrang':Number(sotrang),
            ':nam':Number(nam),
            ':id_NXB':String(id_NXB)

        },
        ReturnValues:"UPDATED_NEW"
    };
    docClient.update(params,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    });
}
exports.xoalichtap =(req,res)=>{
    let id = req.params.id;
    let params={
        TableName:tablelichtap,
        Key:{
            'id':String(id)
        }
    };
    docClient.delete(params,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/lichtap');
        }
    });
}



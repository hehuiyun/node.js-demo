const express = require('express');
const common = require('../../libs/common');
const mysql = require('mysql');

var db = mysql.createPool({host: 'localhost',user: 'root',password: '123456',database: 'learn'})

module.exports = function () {
    var router = express.Router();

    // 检查登录状态
    router.use((req,res,next)=>{
        if(!req.session['admin_id'] && req.url != '/login'){
            //没有登录 重定向 让用户去登录
            res.redirect('/admin/login');
        }else{
            next();
        }
    });

    router.get('/',(req,res)=>{
       res.render('admin/index.ejs',{});
    });

    router.use('/login',require('./login.js')());
    router.use('/banners',require('./banners.js')());
    router.use('/custom',require('./custom.js')());
    return router
};
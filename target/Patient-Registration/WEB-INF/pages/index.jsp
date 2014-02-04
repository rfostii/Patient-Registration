<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Patient Registration</title>
        <link rel="stylesheet" href="<c:url value="/static/frameworks/bootstrap/dist/css/bootstrap.min.css"/>">
        <link rel="stylesheet" href="<c:url value="/static/frameworks/bootstrap/dist/css/bootstrap.min.css"/>">
        <link rel="stylesheet" href="<c:url value="/static/frameworks/bootstrap/dist/css/bootstrap-theme.min.css"/>">
        <link rel="stylesheet/less" type="text/css" href="<c:url value="/static/style/style.less"/>">
    </head>
    <body>
        <div id="wrapper">
            <div class="alert alert-success alert-dismissable">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <strong>Saved!</strong>
            </div>
            <div class="alert alert-danger alert-dismissable">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <strong>Oops! Something wrong, please check entered data</strong>
            </div>
            <div class='notifications top-left'></div>
            <nav class="navbar navbar-default" role="navigation">
                <div class="collapse navbar-collapse" id="top-panel">
                    <ul class="nav navbar-nav">
                        <li class="active"><a class="navbar-brand" href="#">Patient Registration</a></li>
                        <li><a href="#users" data-modal-form="modalUser">Users</a></li>
                        <li><a href="#employers"  data-modal-form="modalEmployer">Employers</a></li>
                        <li><a href="#contacts"  data-modal-form="modalContact">Contacts</a></li>
                    </ul>
                </div>
            </nav>
            <div id="content"></div>
        </div>
        <script type="text/javascript" data-main="<c:url value="/static/js/main.js"/>" src="<c:url value="/static/frameworks/requirejs.js"/>"></script>
    </body>
</html>
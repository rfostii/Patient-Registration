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
        <link rel="stylesheet" href="<c:url value="/static/frameworks/datepicker/css/datepicker.css"/>">
        <link rel="stylesheet/less" type="text/css" href="<c:url value="/static/style/style.less"/>">
    </head>
    <body>
        <div id="wrapper">
            <div class="alert alert-success display-none absolute">
                <strong>Saved!</strong>
            </div>
            <div class="alert alert-danger display-none absolute">
                <strong>Oops! Something wrong, please check entered data</strong>
            </div>
            <div class="page-header">
                <h1>Patient Registration</h1>
            </div>
            <div id="content"></div>
        </div>
        <script type="text/javascript" data-main="<c:url value="/static/js/main.js"/>" src="<c:url value="/static/frameworks/requirejs.js"/>"></script>
    </body>
</html>
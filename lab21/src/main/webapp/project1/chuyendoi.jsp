<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Unit Converter</title>
</head>
<body>
<div align="center">
<h1>Chuyển đổi giá trị</h1>

<form action="/ketqua" method="post">
    Miles:
    <input type="number" name="mile">

    <button type="submit">Đổi sang km</button>
</form>
<div>
<%
    Object result = request.getAttribute("result");
    if(result != null){
%>
<h1 style="color: chocolate;">Kết quả chuyển đổi</h1>
    <h3>Result: <%= result %> km</h3>
<%
    }
%>
</body>
</html>
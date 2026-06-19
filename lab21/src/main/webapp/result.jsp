<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>

<html>
<head>
    <title>Unit Converter</title>
</head>
<body>

<h1 style="color: chocolate;">Kết quả chuyển đổi</h1>
<%
    Object result = request.getAttribute("result");

    if(result != null){
%>

    <h3>Result: <%= result %> km</h3>

<%
    }
%>


</body>
</html>
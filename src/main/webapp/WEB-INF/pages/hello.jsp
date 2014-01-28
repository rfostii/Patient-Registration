<html>
<body>
	<h1>${message}</h1>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <h1>Page with image</h1>
    <!-- use c:url to get the correct absolute path -->
    <img src="<c:url value="/static/img/img.jpg" />" />
</body>
</html>
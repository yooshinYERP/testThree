<%@ page import="java.util.Enumeration" %>
<%@ page import="java.util.HashMap" %>
<%@ page import="java.util.Map" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="true" %>
<%
    Enumeration<String> names = request.getParameterNames();
    String fields = "";
    String file = "";
    while (names.hasMoreElements()) {
        String pName = names.nextElement();
        String value = request.getParameter(pName);
        value = value == null ? "" : value;
        if (pName.equals("report")) {
            file = "<file type='crf' path='http://www.testdemo.co.kr:10104/ClipReport4/crf/" + value + ".crf'>";
        } else {
            if (!value.equals("")) {
                fields += "<field name='"+pName+"'>"+value+"</field>";
            }
        }

    }
%>
<!DOCTYPE html>
<html>
<head>
    <title>Demo 대학교 Report</title>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
<!--   
    <link rel="stylesheet" type="text/css" href="https://report.shingu.ac.kr/css/clipreport.css"/>
    <link rel="stylesheet" type="text/css" href="https://report.shingu.ac.kr/css/UserConfig.css"/>
    <link rel="stylesheet" type="text/css" href="https://report.shingu.ac.kr/css/font.css"/>
    <script type="text/javascript" src="https://report.shingu.ac.kr/js/jquery-1.11.1.js"></script>
    <script type="text/javascript" src="https://report.shingu.ac.kr/js/clipreport.js"></script>
    <script type="text/javascript" src="https://report.shingu.ac.kr/js/UserConfig.js"></script>
-->   
    <link rel="stylesheet" type="text/css" href="http://testdemo.co.kr:10104/css/clipreport.css"/>
    <link rel="stylesheet" type="text/css" href="http://testdemo.co.kr:10104/css/UserConfig.css"/>
    <link rel="stylesheet" type="text/css" href="http://testdemo.co.kr:10104/css/font.css"/>
    <script type="text/javascript" src="http://testdemo.co.kr:10104/js/jquery-1.11.1.js"></script>
    <script type="text/javascript" src="http://testdemo.co.kr:10104/js/clipreport.js"></script>
    <script type="text/javascript" src="http://testdemo.co.kr:10104/js/UserConfig.js"></script>   
    
    <script type="text/javascript">
        var oof = "<?xml version='1.0' encoding='UTF-8'?>";
        oof += "<oof>";
        oof += "<document>";
        oof += "<field-list>";
        oof += "<%=fields%>";
        oof += "</field-list>";
        oof += "<file-list>";
        oof += "<%=file%>";
        oof += "<connection-list>";
        oof += "<connection type='http' namespace='*'>";
        oof += "</connection>";
        oof += "<connection type='data' namespace='*'>";
        oof += "<config-param-list>";
        oof += "<config-param name='dbname'>mssql</config-param>";
        oof += "</config-param-list>";
        oof += "</connection>";
        oof += "</connection-list>";
        oof += "</file>";
        oof += "</file-list>";
        oof += "</document>";
        oof += "</oof>";

        $(document).ready(function () {
            $("input[name=oof]").val(JSON.stringify(oof));
            $("form[name=loadForm]").submit();
        });
    </script>
</head>
<body>
<form name="loadForm" action="http://testdemo.co.kr:10104/ClipReport4/openClipReport.jsp" method="POST">
    <input type="hidden" name="oof"/>
</form>
<div id="clipViewer">
</div>
</body>
</html>
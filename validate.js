<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>JavaScript email validation</title>
<link rel='stylesheet' href='email-valid-style.css' type='text/css' />
</head>
<body onload='document.form1.text1.focus()'>
<div class="mail">
<h2>Enter email to Validate</h2>
<form name="form1" action="#">
<ul>
<li><input type='text' name='text1'/></li>
<li> </li>
<li class="Validate"><input type="submit" name="Validate" value="Validate" onclick="ValidateEmail(document.form1.text1)"/></li>
<li> </li>
</ul>
</form>
</div>
<script src="email-validate.js"></script>
</body>
</html>
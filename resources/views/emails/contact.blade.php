<?php
    $logo = public_path() . '/storage/logo.png';
?>
<body>
<hr style="padding: 1px; background-color: red;" />
<img src="<?= $logo ?>" />
<table align="left" border="0" cellpadding="0" cellspacing="0" width="600">
 <tr>
  <td>
   <span>De: <span style="text-weight: 900">{!! $email !!}</span></span>
  </td>
 </tr>
 <tr>
  <td>
   <span>Nome: <span style="text-weight: 900">{!! $name !!}</span></span>
  </td>
 </tr>
 <tr>
  <td>
   <h3>{{$subject}}</h3>
  </td>
 </tr>
 <tr>
  <td>
   {!! $body !!}
  </td>
 </tr>
</table>
</body>

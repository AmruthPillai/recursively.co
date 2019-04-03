<?
  $mailto="contactus@recursively.co"; 
  $pcount=0;
  $gcount=0;
  $subject = "New subscription alert on recursively.co!";

  $from="no-reply@recursively.co";

  while (list($key,$val)=each($_POST)) {
    $pstr = $pstr."$key: $val \n ";
    ++$pcount;
  }

  while (list($key,$val)=each($_GET)) {
    $gstr = $gstr."$key: $val \n ";
    ++$gcount;
  }

  if ($pcount > $gcount) {
    $message_body=$pstr;
    mail($mailto,$subject,$message_body,"From:".$from);
    echo "Mail has been sent";
  } else {
    $message_body=$gstr;
    mail($mailto,$subject,$message_body,"From:".$from);
    echo "Mail has been sent";
  }
?>
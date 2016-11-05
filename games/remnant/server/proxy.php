<?php

$code = $_GET["code"];
$postfields = "client_id=782e42110249a390a87194e4bc86e8f898d7068bf7b9c7fdf0c7824a2980d64d&client_secret=ce67ec89fafe104db13d0cb796641854361d3c46727697fba309cf1af036bab8&code=" . $code . "&grant_type=authorization_code&redirect_uri=http%3A%2F%2Froxberries.hopto.org%2Fgames%2Fremnant%2Fcallback.html";

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_PORT => "30000",
  CURLOPT_URL => "http://roxberries.hopto.org:30000/oauth/token",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $postfields,
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "content-type: application/x-www-form-urlencoded",
    "postman-token: e4c5142a-7c2e-f887-ad5e-8abfdbbf6c3d"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  header('Content-Type: application/json');
  #echo json_encode($response);
  echo $response;
}

?>
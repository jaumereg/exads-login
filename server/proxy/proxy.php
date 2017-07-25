<?php
/**
 * Candidate can call the API via this proxy:
 *
 * They have to supply the endpoint url in the api_url field - this is mandatory
 * They can also supply the payload in the payload field - this is only needed on login
 *
 * When querying the account data endpoint they'll have to use the Authorization header
 * using the token they received from login and paying attention to the format:
 *     Authorization: Bearer <token>
 *
 */


function call() {
    $ch = curl_init();

    $headers = [
        'Content-Type: application/json'
    ];
    if ( array_key_exists('HTTP_AUTHORIZATION', $_SERVER) ) {
        $headers[] = sprintf('Authorization: %s', $_SERVER['HTTP_AUTHORIZATION']);
    }

    $curlopts = [
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_VERBOSE => true
    ];

    if ( $_SERVER['REQUEST_METHOD'] == "POST" ) {
        $curlopts[CURLOPT_POST] = true;
        $curlopts[CURLOPT_POSTFIELDS] = $_POST['payload'];
        $url = $_POST['api_url'];
    } else {
        $url = $_GET['api_url'];
    }

    $curlopts[CURLOPT_URL] = $url;

    curl_setopt_array($ch, $curlopts);

    return curl_exec($ch);
}

var_dump(call());

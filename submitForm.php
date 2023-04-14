<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$website = $_POST['website'];
	$phone = $_POST['phone'];

	$properties = [
            'properties' => [
		'email' => $email,
		'firstname' => $name,
		'website' => $website,
		'phone' => $phone,
	    ]
        ];

	$contactEndpoint = 'https://api.hubapi.com/crm/v3/objects/contacts';
	$response = hubspotAPIRequest($properties, $contactEndpoint);
	print_r($response);

	if(isset($response->id)){
		$list = [ 'vids' => [$response->id] ]; 
		// 1 for contact list 'first'
		// $listEndpoint = 'https://api.hubapi.com/contacts/v1/lists/1/add';
		// 2 for contact list 'Second'
		$listEndpoint = 'https://api.hubapi.com/contacts/v1/lists/2/add';

		$response = hubspotAPIRequest($list, $listEndpoint);
		if(isset($response->updated) && !empty($response->updated)){
print_r($response);
			$result = array(
			    'status' => 'Success',
			    'message' => 'Contact is created successfully and list is assigned to the contact as well',
			);
			return json_encode($result);
			die();
		}
	}
	$result = array(
	    'status' => $response->status,
	    'message' => $response->message,
	    'response' => $response,
	);
	return json_encode($result);
	die();
    
}

function hubspotAPIRequest($request, $endpoint){

	
	$headers = [
            'Content-Type: application/json',
            'Authorization: Bearer pat-eu1-d8254652-0b10-41f6-906d-2b892cc8ff3b',
        ];
	
	$ch = curl_init();
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($request));
        curl_setopt($ch, CURLOPT_URL, $endpoint);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response    = curl_exec($ch);

	return json_decode($response);
}



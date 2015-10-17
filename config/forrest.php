<?php 

/**
 * Configuration options for Salesforce Oath settings and REST API defaults.
 */
return array(

	/**
	 * Options include WebServer or UserPassword
	 */
	'authentication' => 'WebServer',

	/**
	 * Enter your credentials
	 * Username and Password are only necessary for UserPassword flow.
     * Likewise, callbackURI is only necessary for WebServer flow.
	 */
	'credentials' => array(
		//Required:
		'consumerKey'    => '3MVG9xOCXq4ID1uGTSVFf7Srd9WLOwxc.v.46o8W01vWTwr5B2Tbn_HFjYC153XT68HkbddjcDfALH03mtbSi',
		'consumerSecret' => '2286189902991954304',
		'callbackURI'    => 'http://localhost:8000/callback',
		'loginURL'       => 'https://login.salesforce.com',

		// Only required for UserPassword authentication:
		'username'       => 'developer1@mattmitchener.com',
		// Security token might need to be ammended to password unless IP Address is whitelisted
		'password'       => 'oreo24wpqrj0YgRdYTK8w3cIZ5O6XbwCtX',

	),

	/**
	 * These are optional authentication parameters that can be specified for the WebServer flow.
	 * https://help.salesforce.com/apex/HTViewHelpDoc?id=remoteaccess_oauth_web_server_flow.htm&language=en_US
	 */
	'parameters' => array(
		'display'   => '',
		'immediate' => false,
		'state'     => '',
		'scope'     => '',
		'prompt'	=> '',
	),

	/**
	 * Default settings for resource requests.
	 * Format can be 'json', 'xml' or 'none'
	 * Compression can be set to 'gzip' or 'deflate'
	 */
	'defaults' => array(
		'method'          => 'get',
		'format'          => 'json',
		'compression'     => false,
		'compressionType' => 'gzip',
	),

	/**
	 * Where do you want to store access tokens fetched from Salesforce
	 */
	'storage' => array(
		'type'      => 'session', // 'session' or 'cache' are the two options
		'path'      => 'forrest_', // unique storage path to avoid collisions
		'expire_in' => 60, // number of minutes to expire cache/session
 	),

	/**
	 * If you'd like to specify an API version manually it can be done here.
	 * Format looks like '32.0'
	 */
	'version' => '',

	/**
	 * An optional redirect URL can be specified after the authentication is complete.
	 * If you override the routes included in this package, the authentication will return void.
	*/
	'authRedirect' => '/',

	/**
	 * Optional (and not recommended) if you need to override the instance_url returned from Saleforce
	 */
	'instanceURL' => '',

	/**
	 * Language
	 */
	'language' => 'en_US'

);
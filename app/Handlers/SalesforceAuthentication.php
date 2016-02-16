<?php

namespace App\Handlers;

use Forrest;
use Auth;
use Config;
use Redirect;
use App\User as User;
use Session;

class SalesforceAuthentication
{
    public function login($org) {
        if($org['type'] == 'custom') {
            return Forrest::authenticate($org['url']);
        } else if($org['type'] == 'sandbox') {
            return Forrest::authenticate('http://test.salesforce.com');
        } else {
            return Forrest::authenticate();
        }
    }

    public function callback() {
        Forrest::callback();

        $identity = Forrest::identity();

        $user = User::firstOrCreate([
            'id' => $identity['user_id'],
            'name' => $identity['display_name'],
            'email' => $identity['email']
        ]);

        Auth::login($user);
        
        $url = Config::get('forrest.authRedirect');

        return Redirect::to($url);
    }

    public function logout() {
        try {
            Forrest::revoke();
        } catch(RequestException $e) {
            Session::flush();
        }

        Auth::logout();
        
        Session::flash('loggedOut', 'You have succesfully logged out');

        return view('welcome');
    }
}
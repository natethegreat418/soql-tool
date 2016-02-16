<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Handlers\SalesforceAuthentication;
use Input;

class AuthorizeController extends Controller
{
    protected $salesforceAuth;

    public function __construct(SalesforceAuthentication $salesforceAuth){
        $this->salesforceAuth = $salesforceAuth;
    }

    public function login() {
        $arguments = Input::all();
        return $this->salesforceAuth->login($arguments);
    }

    public function callback() {
        return $this->salesforceAuth->callback();
    }

    public function logout() {
        return $this->salesforceAuth->logout();
    }
}

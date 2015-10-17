<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;


class SalesforceController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function query($query)
    {
        try {
            $result = \Forrest::query($query);
        } catch(ClientException $e) {
            $result = "Invalid query";
        }
        
        return $result;
    }
}
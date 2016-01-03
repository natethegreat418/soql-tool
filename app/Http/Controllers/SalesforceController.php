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
            return "Invalid query: "+$e;
        }
        
        return $result;
    }

    public function next($nextRecordsUrl)
    {
        $nextRecordsUrl = preg_replace("/_/", "/", $nextRecordsUrl);
        // dd($nextRecordsUrl);
        try {
            $result = \Forrest::next($nextRecordsUrl);
        } catch(ClientException $e) {
            return "Invalid query: "+$e;
        }
        
        return $result;
    }

    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function schema($url=null)
    {
        try {
            $result = \Forrest::describe($url);
        } catch(ClientException $e) {
            return "Retrieving schema failed: "+$e;
        }

        dd($result);
        
        return $result;
    }

    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function tooling($url=null)
    {
        try {
            $result = \Forrest::tooling($url);
        } catch(ClientException $e) {
            return "Retrieving schema failed: "+$e;
        }

        dd($result);
        
        return $result;
    }
}
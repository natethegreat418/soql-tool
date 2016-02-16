<?php

namespace App\Handlers;

use Forrest;
use Omniphx\Forrest\Exceptions\SalesforceException as SalesforceException;

class SalesforceAPI {

    public function query($query)
    {
        try {
            $result = Forrest::query($query);
        } catch(SalesforceException $e) {
            //log exception
            throw $e;
        }
        
        return $result; 
    }

    public function next($nextRecordsUrl)
    {
        $nextRecordsUrl = preg_replace("/_/", "/", $nextRecordsUrl);
        $result = Forrest::next($nextRecordsUrl);
        
        return $result;
    }

    public function schema($url=null)
    {
        $result = Forrest::describe($url);
        
        return $result;
    }

    public function tooling($url=null)
    {
        $result = Forrest::tooling($url);
        
        return $result;
    }
}
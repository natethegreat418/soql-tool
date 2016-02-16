<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Handlers\SalesforceAPI;

class SalesforceController extends Controller
{
    protected $salesforceAPI;

    public function __construct(SalesforceAPI $salesforceAPI)
    {
        $this->salesforceAPI = $salesforceAPI;
    }

    public function query($query)
    {
        return $this->salesforceAPI->query($query);
    }

    public function next($nextRecordsUrl)
    {
        return $this->salesforceAPI->next($nextRecordsUrl);
    }

    public function schema($url=null)
    {
        return $this->salesforceAPI->schema($url=null);
    }

    public function tooling($url=null)
    {
        return $this->salesforceAPI->tooling($url=null);
    }
}
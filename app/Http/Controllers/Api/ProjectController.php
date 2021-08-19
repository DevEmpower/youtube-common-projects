<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Project::create([
            'client_name' => $request->input('client_name'),
            'client_company_name' => $request->input('client_company_name'),
            'client_phone' => $request->input('client_phone'),
            'client_email' => $request->input('client_email'),
            'client_address' => $request->input('client_address'),
            'project_name' => $request->input('project_name'),
            'project_address' => $request->input('project_address'),
            'quote_data' => $request->input('quote_data'),
            'quote_revision' => $request->input('quote_revision'),
            'project_notes' => $request->input('project_notes'),
            'shipping_notes' => $request->input('shipping_notes'),
            'lead_time' => $request->input('lead_time'),
            'settings' => $request->input('settings'),
            'frontapp_thread_id' => $request->input('frontapp_thread_id'),
            'frontapp_gdrive_folder_id' => $request->input('frontapp_gdrive_folder_id'),
            'dapulse_pulse_id' => $request->input('dapulse_pulse_id'),
            'extra_id_data' => $request->input('extra_id_data'),

        ]); 

        

        return ("Succesfull"); 

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

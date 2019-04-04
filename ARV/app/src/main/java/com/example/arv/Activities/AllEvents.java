package com.example.arv.Activities;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.widget.Toast;

import com.android.volley.RequestQueue;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.Volley;
import com.example.arv.Adapters.RecyclerViewAdapter;
import com.example.arv.ConnectionManager;
import com.example.arv.R;
import com.example.arv.model.Event;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class AllEvents extends AppCompatActivity {

    private final String JSON_URL = "http://192.168.8.204:1500/patientData"  ;

    private JsonArrayRequest request ;
    private RequestQueue requestQueue ;
    private List<Event> lstevent ;
    private RecyclerView recyclerView  ;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_all_events);

        lstevent = new ArrayList<>() ;
        recyclerView = findViewById(R.id.recyclerviewid) ;



        jsonrequest();

    }


    public void jsonrequest() {
        Log.i("Alok","Aya andar");

        RequestQueue requestQueue = Volley.newRequestQueue(AllEvents.this);

        //Get the bundle
        //   Bundle bundle = getIntent().getExtras();


        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("user", "1");
            Log.i("vishal" , "In Home Json");


        }
        catch (Exception e)
        {
            e.printStackTrace();
        }


        ConnectionManager.sendData(jsonObject.toString(), requestQueue, JSON_URL, new ConnectionManager.VolleyCallback() {
            @Override
            public void onSuccessResponse(String result) {
                try {
                    Log.i("vishal" , "In CM");


                    JSONArray jsonArray = new JSONArray(result);
                    //System.out.println("Sirf array hai"+jsonArray);

                    Log.i("vishal" , "In CM2");

                    for(int i =0; i<jsonArray.length();i++)
                    {
                        JSONObject jsonObj = jsonArray.getJSONObject(i);
//                        Patients patients = new Patients();

                        Event event = new Event();




                        event.setName(jsonObj.getString("id"));
                        event.setAddress(jsonObj.getString("PatientName"));
                        event.setCategory(jsonObj.getString("category"));
                        event.setDescription(jsonObj.getString("description"));

                        System.out.println(jsonObj.getString("id"));

                        System.out.println(jsonObj.getString("PatientName"));

                        Log.i("vishal" , "In CM loop");

                        lstevent.add(event);

                        Log.i("vishal", String.valueOf(lstevent));
                    }




                    // JSONObject jasonObject = new JSONObject(result);
                }
                catch (Exception e )
                {
                    Toast.makeText(AllEvents.this,""+e,Toast.LENGTH_SHORT).show();
                    Log.i("vishal",e.toString());
                }
//                Toast.makeText(AllEvents.this,result,Toast.LENGTH_SHORT).show();

                Log.i("vishal" , result) ;


                setuprecyclerview (lstevent);

            }

            @Override
            public void onErrorResponse(VolleyError error) {
                Log.i("vishal", String.valueOf(error));


            }
        });





//        request = new JsonArrayRequest(JSON_URL, new Response.Listener<JSONArray>() {
//            @Override
//            public void onResponse(JSONArray response) {
//
//               JSONObject jasonObject = null ;
//
//                for (int i=0 ; i<response.length() ; i++) {
//
//                    try {
//                        jasonObject = response.getJSONObject(i);
//                        Patients patients = new Patients();
//                        patients.setName(jasonObject.getString( "user"));
//                        patients.setId(jasonObject.getString("pass"));
//
//
//                        lstPatients.add(patients) ;
//
//
//
//                    } catch (JSONException e ) {
//
//                        e.printStackTrace();
//                    }
//
//
//                }
//
//
//                setuprecyclerview(lstPatients);
//
//
//            }
//        }, new Response.ErrorListener() {
//            @Override
//            public void onErrorResponse(VolleyError error) {
//
//            }
//        });
//
//
//      requestQueue = Volley.newRequestQueue(MyPatient.this) ;
//      requestQueue.add(request) ;
//
    }


    private  void  setuprecyclerview(List<Event> lstevent){

        RecyclerViewAdapter myadapter = new RecyclerViewAdapter(this ,lstevent);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        recyclerView.setAdapter(myadapter);
    }





}

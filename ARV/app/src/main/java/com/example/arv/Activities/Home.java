package com.example.arv.Activities;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.example.arv.R;

public class Home extends AppCompatActivity {

    Button btn_myevent , btn_allevent , btn_map , btn_logout ;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        btn_myevent=  findViewById(R.id.my_events);
        btn_allevent=findViewById(R.id.all_events);
        btn_map= findViewById(R.id.map_events);


        btn_myevent.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(Home.this , RV.class);
                i.putExtra("vishal","myevent");
                startActivity(i);
            }
        });



        btn_allevent.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(Home.this , AllEvents.class);
                startActivity(i);
            }
        });


        btn_map.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(Home.this , MapsActivity.class);
                startActivity(i);
            }
        });
    }
}

package com.example.arv.Activities;

import android.content.Intent;
import android.support.design.widget.CollapsingToolbarLayout;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;


import com.example.arv.EventRegistration;
import com.example.arv.R;

import static android.icu.lang.UCharacter.GraphemeClusterBreak.T;

public class EventActivity extends AppCompatActivity {

    public Button btn_register_event;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_event);

        btn_register_event = findViewById(R.id.event_register);


        getSupportActionBar().hide();

        //to receive data

        String name = getIntent().getExtras().getString("event_name");
        String address = getIntent().getExtras().getString("event_address");
        String category = getIntent().getExtras().getString("event_category");
        String description = getIntent().getExtras().getString("event_description");


        CollapsingToolbarLayout collapsingToolbarLayout = findViewById(R.id.collapsingtoolbar_id);
        collapsingToolbarLayout.setTitleEnabled(true);


        TextView tv_name = findViewById(R.id.ea_event_name);
        TextView tv_address = findViewById(R.id.ea_event_address);
        TextView tv_category = findViewById(R.id.ea_event_category);
        TextView tv_description = findViewById(R.id.ea_description);


        // To set the values

        tv_name.setText(name);
        tv_category.setText(category);
        tv_address.setText(address);
        tv_description.setText(description);


        collapsingToolbarLayout.setTitle(name);


        btn_register_event.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(EventActivity.this , EventRegistration.class);
                startActivity(i);
            }
        });

    }
}

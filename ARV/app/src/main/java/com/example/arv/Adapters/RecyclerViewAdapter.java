package com.example.arv.Adapters;

import android.content.Context;
import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.example.arv.Activities.EventActivity;
import com.example.arv.R;
import com.example.arv.model.Event;

import java.util.List;


public class RecyclerViewAdapter extends  RecyclerView.Adapter<RecyclerViewAdapter.MyViewHolder>{

    private Context mContex ;
    private List<Event> mData ;


    public RecyclerViewAdapter(Context mContex, List<Event> mData) {
        this.mContex = mContex;
        this.mData = mData;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup viewGroup, int i) {

        View view ;
        LayoutInflater inflater = LayoutInflater.from(mContex);
        view = inflater.inflate(R.layout.event_row_item , viewGroup , false);

        final MyViewHolder viewHolder = new MyViewHolder(view);

        viewHolder.view_container.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent i = new Intent(mContex, EventActivity.class);

                i.putExtra("event_name" , mData.get(viewHolder.getAdapterPosition()).getName());

                i.putExtra("event_address" , mData.get(viewHolder.getAdapterPosition()).getAddress());

                i.putExtra("event_description",mData.get(viewHolder.getAdapterPosition()).getDescription());

                i.putExtra("event_category",mData.get(viewHolder.getAdapterPosition()).getCategory());


                mContex.startActivity(i);

            }
        });


        return  viewHolder;
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder myViewHolder, int i) {

        myViewHolder.tv_name.setText(mData.get(i).getName());
        myViewHolder.tv_address.setText(mData.get(i).getAddress());
        myViewHolder.tv_category.setText(mData.get(i).getCategory());



    }

    @Override
    public int getItemCount() {
        return mData.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {

        TextView tv_name ;
        TextView tv_address ;
        TextView tv_category;

        LinearLayout view_container ;



        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            view_container = itemView.findViewById(R.id.container);


            tv_name = itemView.findViewById(R.id.event_name);
            tv_address = itemView.findViewById(R.id.event_address);
            tv_category=itemView.findViewById(R.id.event_category);


        }
    }
}

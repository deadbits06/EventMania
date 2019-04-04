package com.example.arv.model;

public class Event {

    public   String name ;
    public   String address ;
    private  String description ;
    public   String category ;


    public Event() {

    }


    public Event(String name, String address , String description , String category) {
        this.name = name;
        this.address = address;
        this.description=description;
        this.category=category;
    }


    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public String getDescription(){return description;}

    public String getCategory(){return category;}


    public void setName(String name) { this.name = name; }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setDescription(String description){this.description=description;}

    public void setCategory(String category){this.category=category;}
}

package com.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tourists")
public class Tourist {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "First_name")
	private String FirstName;
	
	@Column(name = "Last_name")
	private String LastName;
	
	@Column(name = "Gender")
	private String Gender;
	
	@Column(name = "age")
	private int age;
	
	@Column(name = "From_place")
	private String FromPlace;
	
	@Column(name = "NumberOf_days")
	private int NumberOfDays;
	
	public Tourist() {
		
	}
	
	public Tourist(String FirstName,String LastName,String Gender, int age,String FromPlace, int NumberOfDays) {
		super();
		this.FirstName=FirstName;
		this.LastName=LastName;
		this.Gender=Gender;
		this.age=age;
		this.FromPlace=FromPlace;
		this.NumberOfDays=NumberOfDays;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return FirstName;
	}
	public void setFirstName(String firstName) {
		FirstName = firstName;
	}
	public String getLastName() {
		return LastName;
	}
	public void setLastName(String lastName) {
		LastName = lastName;
	}
	public String getGender() {
		return Gender;
	}
	public void setGender(String gender) {
		Gender = gender;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getFromPlace() {
		return FromPlace;
	}
	public void setFromPlace(String fromPlace) {
		FromPlace = fromPlace;
	}
	public int getNumberOfDays() {
		return NumberOfDays;
	}
	public void setNumberOfDays(int numberOfDays) {
		NumberOfDays = numberOfDays;
	}
	

}

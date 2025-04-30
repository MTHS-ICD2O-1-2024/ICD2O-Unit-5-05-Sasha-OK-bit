// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Sasha Vorontsov
// Created on: April 2025
// This file contains the JS functions for index.html


function calculaterandomnumber () {
const lengthAString = prompt("Enter length A of the triangle (mm):")
const lengthBString = prompt("Enter length A of the triangle (mm):")
const lengthCString = prompt("Enter length A of the triangle (mm):")

const lengthA = parseFloat(lengthAString)
const lengthB = parseFloat(lengthBString)
const lengthC = parseFloat(lengthCString)

// using the cosine law

const angleA = Math.acos((lengthB**2 + lengthC**2 - lengthA**2) / (2 * lengthB * lengthC)) * (180/Math.PI)
const angleB = Math.acos((lengthC**2 + lengthA**2 - lengthB**2) / (2 * lengthC * lengthA)) * (180/Math.PI)
const angleC = Math.acos((lengthA**2 + lengthB**2 - lengthC**2) / (2 * lengthA * lengthB)) * (180/Math.PI)
const sumOfAngles = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2))

if (sumofAngles != 180) {

  document.getElementById('answer1').innerHTML =
  "<p>You can get a discount for the playplace</p>" 
  }
  else if {
    document.getElementById('answer1').innerHTML =
      "<p>The Normal Price It Is</p>" 
  }
    else if {
    document.getElementById('answer1').innerHTML =
      "<p>The Normal Price It Is</p>" 
  }
    else {
    document.getElementById('answer1').innerHTML =
      "<p>The Normal Price It Is</p>" 
  }
}


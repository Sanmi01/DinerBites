import React from 'react'
import { Link } from 'react-router-dom'
import './Foreign.css'
import chili from '../../assets/foreign/Chili con carne.jpg'
import chimichanga from '../../assets/foreign/Chimichanga.jpg'
import chinese from '../../assets/foreign/Chinese chicken salad.jpg'
import chopsuey from '../../assets/foreign/chop suey.jpg' 
import Cuban from '../../assets/foreign/Cuban sandwich.jpg'
import English from '../../assets/foreign/English muffin.jpg'
import Fajitas from '../../assets/foreign/Fajitas.jpg'
import General from '../../assets/foreign/General Tso,s chicken.jpg'
import German from '../../assets/foreign/German chocolate cake.jpg'
import Irish from '../../assets/foreign/Irish potato candy.jpg'
import Queso from '../../assets/foreign/Queso.jpg'
import Spagmeat from '../../assets/foreign/Spaghetti and meatballs.jpg'
import Spicy from '../../assets/foreign/Spicy tuna roll.jpg'
import Swiss from '../../assets/foreign/Swiss steak.jpg'
import Taco from '../../assets/foreign/Taco salad.jpg'

const Foreign = () => {

  const products = [
    {d: 1, foodname: 'Chili con carne', Image: chili, Price: '#2350'},
    {d: 2, foodname: 'Chimichanga', Image: chimichanga, Price: '#3500'},
    {d: 3, foodname: 'Chinese chicken salad', Image: chinese, Price: '#2400'},
    {d: 4, foodname: 'Chop suey', Image: chopsuey, Price: '#1550'},
    {d: 5, foodname: 'Cuban sandwich', Image: Cuban, Price: '#1500'},
    {d: 6, foodname: 'English Muffin', Image: English, Price: '#3000'},
    {d: 7, foodname: 'Fajitas', Image: Fajitas, Price: '#2000'},
    {d: 8, foodname: 'General Tso,s chicken', Image: General, Price: '#4500'},
    {d: 9, foodname: 'German chocolate cake', Image: German, Price: '#2000'},
    {d: 10, foodname: 'Irish potato candy', Image: Irish, Price: '#2100'},
    {d: 11, foodname: 'Queso', Image: Queso, Price: '#3600'},
    {d: 12,foodname: 'Spaghetti and meatballs', Image: Spagmeat, Price: '#4350'},
    {d: 13, foodname: 'Spicy tuna roll', Image: Spicy, Price: '#1500'},
    {d: 14, foodname: 'Swiss steak', Image: Swiss, Price: '#5250'},
    {d: 15, foodname: 'Taco salad', Image: Taco, Price: '#3000'},
  ]
  return (
    <div className='foreign-page'>
      <Link className='link' to='/Local'> <h5>Go to Local store</h5> </Link>
      <div className='foreign-items'>
      {products && products.map((item) =>
        <div className='card-f'>
          <div className='img'>
            <img src={item.Image} alt=''/>
          </div>
          <h4> {item.foodname} </h4>
          <h4> {item.Price} </h4>
          <button> ADD TO CART</button>
        </div>
      )
      
      }
      </div>
      <div className='out-f'>
        <button>Go TO CART</button>
      </div>  
    </div>
    
  )
}

export default Foreign
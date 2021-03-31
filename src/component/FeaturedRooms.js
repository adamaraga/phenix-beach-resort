import React, { Component } from 'react'
import {RoomContext } from '../Context'
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext

    render() {

        let {loading , featuredRooms: rooms} = this.context;
    //  if(!rooms){
    //     console.log('noooope')
    //  }else{
    //      rooms.map(room => {
    //         <Room key={room.id} />
    //     })
    //  }

    // function room () {
    //     rooms && rooms.map(room => {
    //         return <Room key={room.id} room />
    //     }) 
    // }

        rooms = rooms && rooms.map(room => {
               return <Room key={room.id} room={room} />
       }) 


        return (
            <section className="featured-rooms">
                <Title title='feautured rooms'/>
                <div className="featured-rooms-center">
                    { loading ? <Loading title='featured rooms' /> : rooms}
                </div>
               
            </section>
        )
    }
}

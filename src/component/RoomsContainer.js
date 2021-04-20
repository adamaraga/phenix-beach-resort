import React from 'react'
import { withRoomConsumer } from '../Context'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import Loading from './Loading'


function RoomsContainer({context}) {
    const {loading, sortedRooms, rooms} = context;

           if(loading) {
               return<Loading title='rooms' />
           }
    
           return(
            <>
                   <RoomFilter rooms={rooms} />
                   <RoomList rooms={sortedRooms} />
                   
            </>
           )
}

export default withRoomConsumer(RoomsContainer)







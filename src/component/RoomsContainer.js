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






// import React from 'react'
// import { RoomConsumer } from '../Context'
// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'
// import Loading from './Loading'

// function RoomsContainer() {
//     return (
    
//         <RoomConsumer>
//             {
//                 (value) => {
                    
//                     const {loading, sortedRooms, rooms} = value;

//                     if(loading) {
//                         return<Loading />
//                     }

//                     return(
//                         <div>
//                             hello from rooms container
//                             <RoomFilter rooms={rooms} />
//                             <RoomList rooms={sortedRooms} />
                            
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
        
        
//     )
// }

// export default RoomsContainer

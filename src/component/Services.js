import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import {GiIsland, GiWaveSurfer} from 'react-icons/gi'
import {IoMdBoat} from 'react-icons/io'

export default class Services extends Component {

    state={
        services:[
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, perferendis?'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, perferendis?'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, perferendis?'
            },
            {
                icon: <GiIsland />,
                title: 'island explore',
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, perferendis?'
            },
            {
                icon: <IoMdBoat />,
                title: 'cruise',
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, perferendis?'
            },
            {
                icon: <FaBeer />,
                title: 'Strongest Beer',
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, perferendis?'
            }, {
                icon: <GiWaveSurfer />,
                title: 'surfing lessons',
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, perferendis?'
            }
        ]
    }

    render() {
        return (
            
               <section className="services">
                    <Title title='services'/>
                    <div className="services-center">
                        {this.state.services.map( (item, index) => {
                            return <article key={index} className='service'>
                                        <span>{item.icon}</span>
                                        <h6>{item.title}</h6>
                                        <p>{item.info}</p>
                                </article>
                        })}
                    </div>
               </section>
                
            
        )
    }
}

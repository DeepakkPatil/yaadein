import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { Container } from '@material-ui/core';

export function Example(props)
{
    const value= props.positive ;
    let val=true ;
    if(value<0)
        val=false ;
    
    var items1 = [
        {
            name: "Quote #1",
            img: "https://source.unsplash.com/1600x900/?quotes"
        },
        {
            name: "Quote #2",
            img: "https://source.unsplash.com/1600x900/?quotes-motivation"
        },
         {
            name: "Quote #3",
            img: "https://source.unsplash.com/1600x900/?success-quotes"
        },
         {
            name: "Quote #4",
            img: "https://source.unsplash.com/1600x900/?positive-quotes"
        }
    ]
     var items2 = [
        {
            name: "Quote #1",
            img: "https://source.unsplash.com/1600x900/?quotes"
        },
        {
            name: "Quote #2",
            img: "https://source.unsplash.com/1600x900/?motivation"
        },
         {
            name: "Quote #3",
            img: "https://source.unsplash.com/1600x900/?success"
        },
         {
            name: "Quote #4",
            img: "https://source.unsplash.com/1600x900/?inspiration"
        }
    ]
    return (
        <>
            { val && 
                <Carousel 
                    style={{ padding: 50, maxWidth: "400px" }}
                    indicatorIconButtonProps={{ 
                        sx: { 
                            margin: '0 10px' 
                        } 
                    }}
                >
                    {
                        items1.map((item, i) => (
                            <Item key={i} item={item} />
                        ))
                    }
                </Carousel>
            }
            { !val && 
                <Carousel 
                    style={{ padding: 50, maxWidth: "400px"}}
                    indicatorIconButtonProps={{ 
                        sx: { 
                            margin: '10px 10px' 
                        } 
                    }}
                >
                    {
                        items2.map((item, i) => (
                            <Item key={i} item={item} />
                        ))
                    }
                </Carousel>
            }
        </>
    )
}

function Item(props)
{
    return (
        <Container>
            <h2>{props.item.name}</h2>
            
            <img  
                src={props.item.img} 
                style={{ 
                    objectFit: 'contain',
                    maxWidth: '100%',
                    height: 'auto',
                    padding:10,
                     marginBottom: '50px'
                }}
            />
        </Container>
    )
}

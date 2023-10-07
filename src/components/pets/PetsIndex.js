import { useState, useEffect } from 'react'
import {Card} from 'react-bootstrap'
///import { Link } from 'react-router-dom'
///funcyion call from api
import { getAllPets } from '../../api/pet'
//we need messages from the auto dismiss messages file
import messages from '../shared/AutoDismissAlert/messages'

const cardContainerLayout = {
    display:'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'

}

const PetsIndex = (props) => {
    const[pets, setPets] = useState(null)
    const[error, setError] = useState(false)
    const { msgAlert } = props

    //takes two arguments
    //first callbak
    //second dependancy
    useEffect(() =>{
        getAllPets()
        .then( res => {
            // console.log('the pets?', res.data.pets)
            setPets(res.data.pets)
        }) 
        .catch( err => {
            msgAlert({
                heading: 'Error getting Pets',
                message: messages.indexPetsFailure,
                variant: 'danger'
            })
            setError(true)
        })

    }, [])

    if (error) {
        return <p>Error!</p>
    }
    if (!pets) {
        return <p>Loading...?</p>
    } else if (pets.length === 0) {
        return <p>No pets yet, go add some!</p>
    }
    // console.log('pets in pets index', pets)
    const petCards = pets.map(pet => (
        <Card key = {pet.id} style={{width:'30%', margin:5}}>
            <Card.Header>{pet.fullTitle}</Card.Header>
            <Card.Body>
                <Card.Text>{pet.name}</Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
        <div className='container-md' style={cardContainerLayout}>
            <h1>Pets Index</h1>
            {petCards}

        </div>
    )
}

export default PetsIndex
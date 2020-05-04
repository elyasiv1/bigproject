import React from 'react'
import { Link } from 'react-router-dom'


export default class Home extends React.Component {
    render() {
        return <div className="HomePage">

            <div className='homePageImag'>

                <h2> השכרת רכב</h2>
                <Link to='/lease' className='link'>יאללה להשכיר</Link>
               
               
            </div>
             <div className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique cursus congue. Fusce gravida libero sit amet nunc tempus interdum. Maecenas accumsan justo nec condimentum efficitur. Nunc varius et libero eget mattis. Curabitur quis orci eget arcu consequat facilisis. Vestibulum ut convallis tellus. Integer nec eros dui. Aliquam consequat quis odio eleifend aliquet. Etiam vestibulum commodo diam, non vestibulum magna ullamcorper eu. Donec tempor, nunc eu cursus tempus, elit nibh gravida arcu, vitae blandit magna tortor sit amet mauris. Donec vel ullamcorper lacus. Sed eget accumsan est. Duis mollis pretium dui quis iaculis. Etiam porta libero in neque vestibulum, id dictum dolor aliquet.</div>
        </div>



    }
}

import React from 'react'
import { Link } from 'react-router-dom'
import Cars from './imports/cars'


export default function CarLeas(props) {


    return <div className="carLeas">
        <h2> השכרת רכב</h2>
        <aside className='filters'>
            <form>
                <section><label>מתאריך:</label> <br /> <input name='startDate' onChange={props.addChange} type='date' />
                </section>
                <section><label>עד:</label> <br /> <input name='endDate' onChange={props.addChange} type='date' />
                </section>
                <section>
                    <label>סוג הרכב:</label><br />
                    <input type='checkbox' name='size0' onChange={props.addChange} />קטן<br />
                    <input type='checkbox' name='size1' onChange={props.addChange} />מנהלים<br />
                    <input type='checkbox' name='size2' onChange={props.addChange} />מסחרי<br />
                </section>
                <section>
                    <label>תיבת הילוכים:</label><br />
                    <input type='checkbox' name='manual' onChange={props.addChange} />ידני<br />
                    <input type='checkbox' name='auto' onChange={props.addChange} />אוטומטי <br />
                </section>
            </form>
        </aside>
    </div>
}



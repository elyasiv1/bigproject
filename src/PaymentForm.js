import React from 'react'


export default function PaymenyForm(props) {
    
    return <div className="PaymenyForm">
        <h2> השכרת רכב</h2>
        <form className="formPayment" onChange={props.onChange}>
            <section>
                <label>שם פרטי</label>
                <br />
                <input name="userName" type='text' placeholder='שם פרטי'></input> </section> <br />
            <section>
                <label>שם משפחה</label>
                <br />
                <input name="userLastName" type='text' placeholder='שם משפחה'></input> </section> <br />

            <section>

                <label>מספר זהות</label>
                <br />
                <input type='Number' placeholder='מספר זהות' name='id' onChange={props.inputChange} />
                <br />
            </section>
            <section>
                <label>דוא"ל</label>
                <br />
                <input type='email' placeholder='mail' name='mail' onChange={props.inputChange} />
                <br />

            </section>
            <section>

                <label>טלפון</label>
                <br />
                <input type='Number' placeholder='טלפון שלך' name='pone' onChange={props.inputChange} />
                <br />
            </section>

            <section>
                <label>גיל</label>
                <br />
                <input type='number' placeholder='הגיל שלך' name='age' onChange={props.inputChange} />
                <br />
            </section>

            <section>
                <label>מתאריך:</label>
                <br />
                <input name='startDate' onChange={props.inputChange} type='date' />

            </section>

            <section>
                <label>עד:</label>
                <br />
                <input name='EndDate' onChange={props.inputChange} type='date' />
            </section>

        </form>

    </div>
}




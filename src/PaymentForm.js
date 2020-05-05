import React from 'react'


export default function PaymenyForm(props) {

    return <div className="PaymenyForm">
        <h2> השכרת רכב</h2>
        <form className="formPayment">
            <section>
                <label>שם פרטי</label>
                <br />
                <input type='text' placeholder='שם פרטי' name="userName" onChange={props.inputChange}></input> </section> <br />
            <section>
                <label>שם משפחה</label>
                <br />
                <input type='text' placeholder='שם משפחה' name="userLastName" onChange={props.inputChange}></input> </section> <br />

            <section>

                <label>מספר זהות</label>
                <br />
                <input type='Number' placeholder='מספר זהות' name='id' min='100000000' max='399999999' onChange={props.inputChange} />
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
                <input type='pone' placeholder='טלפון שלך' name='pone' onChange={props.inputChange} />
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




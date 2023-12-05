import { useState } from "react"
import Button from "../Button/Button"
import styles from "./ContactForm.module.css"
import {MdMessage, MdCall, MdEmail} from 'react-icons/md'

const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")

    const onSubmit = (event) => {
        event.preventDefault();
        setName(event.target[0].value)
        setEmail(event.target[1].value)
        setText(event.target[2].value)
    }

    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button 
                        text="VIA SUPPORT CHAT"
                        icon={<MdMessage fontSize="24px"/>}
                    />
                    <Button 
                        text="VIA Call"
                        icon={<MdCall fontSize="24px"/>}
                    />
                </div>
                <Button 
                    text="VIA Email Form"
                    icon={<MdEmail fontSize="24px"/>}
                    isOutline={true}
                />
                <form onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"/>
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email"/>
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows="8"/>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "end",
                    }}>
                    <Button 
                        text="SUBMIT BUTTON"
                    />
                    </div>
                </form>
                <div>{name + " " + email + "" + text}</div>
            </div>
            <div className={styles.contact_image}>
                <img src="/images/contact.svg" alt="" />
            </div>
        </section>
    )
}

export default ContactForm
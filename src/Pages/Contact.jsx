export const Contact = () => {

    const handleFormSubmit = (formData) => {
        const formInputdata = Object.fromEntries(formData.entries());
        console.log(formInputdata);

    }  


    return <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>

        <div className="contact-div">
            <div className="contact-wrapper container">

                <form action={handleFormSubmit}>
                    <input type="text"
                        required
                        className="form-control"
                        autoComplete="off"
                        placeholder="Enter your name"
                        name="username" />
                    <input type="email"
                        required
                        className="form-control"
                        autoComplete="off"
                        placeholder="Enter your email"
                        name="email" />

                    <textarea
                        className="form-control"
                        rows="10"
                        name="message"
                        required
                        autoComplete="off"
                        placeholder="Enter your message"
                    ></textarea>
                    <button type="submit" value="send" className="contact-btn">Send</button>
                </form>
            </div>
            <div className="world-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1390.2496655505236!2d75.79508137310131!3d26.870511426090943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db50ca7161f9b%3A0x59f955fad9e97381!2sPooja%20Kirana!5e1!3m2!1sen!2sin!4v1758907565235!5m2!1sen!2sin"
                    width='100%' height='100%'
                    style={{ border: 1, borderRadius: 20, }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
}
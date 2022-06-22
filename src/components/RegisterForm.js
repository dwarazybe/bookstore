import './LoginForm.css'


function RegisterForm() {
    return (
        <div className="login">
            <form className="form">
                <div className="form-inner">
                    <h2>Rejestracja</h2>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email"

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Hasło:</label>
                        <input type="password" name="password" id="password"

                        />
                    </div>
                    <input type="submit" value="Rejestruj" />
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;
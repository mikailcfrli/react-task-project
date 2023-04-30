import "./LoginPage.css";
export const LoginPage = () => {
    return (
        <form>
      <h2>Login</h2>
      <label >Email:</label>
      <input type="email" id="email" name="email" />
      <div id="error-message"></div>
      <label >Password:</label>
      <input type="password" id="password" name="password" />
      <button type="submit" id="submit">Sign In</button>
    </form>
    );
}
// импорты со стилями или либа стилей, так проще. Форм в первую очеред. Формик а потом антдизайн

function Login() {
	return (
		<div className="loginForm">
			<form class="form-1">
				<p class="field">
					<input type="text" name="login" placeholder="Логин или емэйл">
						<i class="icon-user icon-large"></i>
						</input>
				</p>
				<p class="field">
					<input type="password" name="password" placeholder="Пароль">
						<i class="icon-lock icon-large"></i>
						</input>
				</p>
				<p class="submit">
					<button type="submit" name="submit"><i class="icon-arrow-right icon-large"></i></button>
				</p>
			</form>
		</div>
	);
}

export default Login;

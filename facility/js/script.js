$(document).ready(function(){
	//SignUp window
	$("#signup").click(function(){
		$('body').append('<div class="modal" id="modal"></div>');
		$('.modal').append('<div class="sign clearfix"><div class="close" id="close"><a href="#" class="uk-hidden-hover" uk-icon="icon: close"></a></div><form id="form_reg" action=""><div class="input_text clearfix"><p>Sign up to get all features</p><h4>Username</h4><div class="inputs clearfix"><input type="text" class="first_name" name="reg_name" id="reg_name" placeholder="Doge" /></div><h4>E-mail</h4><div class="inputs clearfix"><input type="text" class="last_name" name="reg_login" id="reg_login" placeholder="test@gmail.com" /></div><h4>Password</h4><div class="inputs clearfix"><input type="email" class="mail" name="reg_email" id="reg_email" placeholder="" /></div><div class="check clearfix"><div class="checker clearfix"><input type="checkbox" id="chk_acer" /><label for="chk_acer">I gree with <span>terms and conditions</span></label></div></div><button type="submit" name="reg_submit" id="form_submit" class="subm">SIGN UP</button></div></form></div>');
		$('.modal').fadeIn(500);
		
		//close SignUp
		$("#close").click(function(){
			$('.modal').empty().remove();
		});
	});
});
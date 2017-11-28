<template>
	<div class="hello">
		<h1>Registration</h1>
		<div class="row" id='form'>
			<div class="col-md-4">
				<form class="form-horizontal">
					<div class="form-group">
					<label>username</label><input class="form-control" type="text" v-validate="'required'"name="username"/><br>
					<span class="alert alert-danger" v-show="errors.has('username')">{{errors.first('username')}}</span><br>
				</div>
					<div class="form-group">
						
					<label>email</label><input class="form-control" v-validate = "'required'" type="email" name="email"/><br>
					<span class="alert alert-danger" v-show="errors.has('email')">{{errors.first('email')}}</span><br>
					</div>
					<div class="form-group">
					<label>password</label><input class="form-control" type="password" v-validate="'required'" name="password"/><br>
					<span class="alert alert-danger" v-show="errors.has('password')">{{errors.first('password')}}</span><br>
				</div>
				<div class="form-group">
					<label>Confirm password</label><input class="form-control" v-validate="'required'" type="password" name="confirm_password"/><br>
					<span class="alert alert-danger" v-show="errors.has('confirm_password')">{{errors.first('confirm_password')}}</span><br>
				</div>
					<button class="btn btn-primary" type="submit">Submit</button>
				
				</form>
			</div>
		</div>	
	</div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      msg: 'Registration Message'
    }
  }
}
</script>

<style>
	h1, h2 {
  font-weight: normal;
}
#form {
	align-content: center;
}
</style>
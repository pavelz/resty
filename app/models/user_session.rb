class UserSession < Authlogic::Session::Base
  generalize_credentials_error_messages "Email and/or password you have entered are invalid."
  login_field :email

end

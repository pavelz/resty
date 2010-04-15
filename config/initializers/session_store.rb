# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_theterminal_session',
  :secret      => 'b18850db545abbdd6de5f116c032b0b8c48618612a4fca15b63ce5922f78c6db1f071d0c530d5825db30bf94eadfed39a88e1bf8aa17960d50e329a518bba231'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store

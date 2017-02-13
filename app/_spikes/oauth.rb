# Application:      site oauth
# Application Id:	782e42110249a390a87194e4bc86e8f898d7068bf7b9c7fdf0c7824a2980d64d
# Secret:	        ce67ec89fafe104db13d0cb796641854361d3c46727697fba309cf1af036bab8
# Callback Url:	    http://roxberries.hopto.org/oauth/callback/


client = OAuth2::Client.new('782e42110249a390a87194e4bc86e8f898d7068bf7b9c7fdf0c7824a2980d64d', 'ce67ec89fafe104db13d0cb796641854361d3c46727697fba309cf1af036bab8', :site => "http://example.com")
access_token = client.password.get_token('user@example.com', 'sekret')
puts access_token.token